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
const {NoteApp} = require("./components/NoteApp");


// creating store with existing reducer and middlewares with applyMiddleware function
const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

// example of  action creator
const createNote = () => {
    return (dispatch) => {
        dispatch({
            type: CREATE_NOTE
        });
        api.createNote()
            .then(({ id }) => {
                dispatch({
                    type: CREATE_NOTE,
                    id
                })
            })
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    openNoteId: state.openNoteId,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    onAddNote: () => dispatch(createNote()),
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
