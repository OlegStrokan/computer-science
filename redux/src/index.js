///////////////////////////////
// Mini Redux implementation //
///////////////////////////////

const ReactDOM = require("react-dom/client");
const React = require("react");
const {createStore} = require("./store/store");
const {reducer} = require("./store/reducer");
const {CREATE_NOTE, UPDATE_NOTE, OPEN_NOTE, CLOSE_NOTE} = require("./store/actions");


const store = createStore(reducer);

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

class NoteAppContainer extends React.Component {
    constructor(props) {
        super();
        this.state = props.store.getState();
        this.onAddNote = this.onAddNote.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onOpenNote = this.onOpenNote.bind(this);
        this.onCloseNote = this.onCloseNote.bind(this);
    }
    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() =>
            this.setState(this.props.store.getState())
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    onAddNote() {
        this.props.store.dispatch({
            type: CREATE_NOTE
        });
    }
    onChangeNote(id, content) {
        this.props.store.dispatch({
            type: UPDATE_NOTE,
            id,
            content
        });
    }
    onOpenNote(id) {
        this.props.store.dispatch({
            type: OPEN_NOTE,
            id
        });
    }
    onCloseNote() {
        this.props.store.dispatch({
            type: CLOSE_NOTE
        });
    }
    render() {
        return (
            <NoteApp
                {...this.state}
                onAddNote={this.onAddNote}
                onChangeNote={this.onChangeNote}
                onOpenNote={this.onOpenNote}
                onCloseNote={this.onCloseNote}
            />
        );
    }
}



let container = null;

document.addEventListener('DOMContentLoaded', (event) => {
    if (!container) {
        container = document.getElementById('root')
        const root = ReactDOM.createRoot(container)
        root.render(<NoteAppContainer store={store}/>);
    }
});
