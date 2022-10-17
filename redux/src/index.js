///////////////////////////////
// Mini Redux implementation //
///////////////////////////////

const ReactDOM = require("react-dom/client");
const React = require("react");
const {createStore} = require("./store/store");
const {reducer} = require("./store/reducer");
const {CREATE_NOTE, UPDATE_NOTE, OPEN_NOTE, CLOSE_NOTE} = require("./store/actions");
const {connect} = require("./store/connect");
const {Provider} = require("./store/provider");
const {applyMiddleware} = require("./store/middleware/applyMiddleware");
const {loggingMiddleware} = require("./store/middleware/loggingMiddleware");
const {thunkMiddleware} = require("./store/middleware/thunkMiddleware");
const {api} = require("./tools/createFakeApi");


const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

const NoteEditor = ({note, onChangeNote, onCloseNote}) => (
    <div>
        <div>
      <textarea
          className="editor-content"
          autoFocus
          value={note.content}
          onChange={event =>
              onChangeNote(note.id, event.target.value)
          }
      />
        </div>
        <button className="editor-button" onClick={onCloseNote}>
            Add
        </button>
        <button className="editor-button" onClick={onCloseNote}>
            Close
        </button>
    </div>
);

const NoteTitle = ({note}) => {
    const title = note.content
        .split('\n')[0].replace(/^\s+|\s+$/g, '');
    if (title === '') {
        return <i>Untitled</i>;
    }
    return <span>{title}</span>;
};

const NoteLink = ({note, onOpenNote}) => (
    <li className="note-list-item">
        <a href="redux/src/index#" onClick={() => onOpenNote(note.id)}>
            <NoteTitle note={note}/>
        </a>
    </li>
);

const NoteList = ({notes, onOpenNote}) => (
    <ul className="note-list">
        {
            Object.keys(notes).map(id =>
                <NoteLink
                    key={id}
                    note={notes[id]}
                    onOpenNote={onOpenNote}
                />
            )
        }
    </ul>
);

const NoteApp = ({ notes, openNoteId, onAddNote, onChangeNote, onOpenNote, onCloseNote }) => (
    <div>
        {
            openNoteId ?
                <NoteEditor
                    note={notes[openNoteId]}
                    onChangeNote={onChangeNote}
                    onCloseNote={onCloseNote}
                /> :
                <div>
                    <NoteList
                        notes={notes}
                        onOpenNote={onOpenNote}
                    />
                        <button
                            className="editor-button"
                            onClick={onAddNote}
                        >
                            New Note
                        </button>
                </div>
        }
    </div>
);


const mapStateToProps = state => ({
    notes: state.notes,
    openNoteId: state.openNoteId
});

const mapDispatchToProps = dispatch => ({
    onAddNote: () => dispatch(
        (dispatch) => {
            dispatch({
                type: CREATE_NOTE
            });
            api.createNote().then(({ id }) => {
                dispatch({
                    type: CREATE_NOTE,
                    id,
                })
            })
        }
    ),
    onChangeNote: (id, content) => dispatch({
        type: UPDATE_NOTE,
        id,
        content
    }),
    onOpenNote: id => dispatch({
        type: OPEN_NOTE,
        id
    }),
    onCloseNote: () => dispatch({
        type: CLOSE_NOTE
    })
});




const NoteAppContainer = connect(mapStateToProps, mapDispatchToProps)(NoteApp)


let container = null;

document.addEventListener('DOMContentLoaded', (event) => {
    if (!container) {
        container = document.getElementById('root')
        const root = ReactDOM.createRoot(container)
        root.render(
            <Provider store={store}>
            <NoteAppContainer/>
            </Provider>
        );
    }
});
