
const initialState = {
    nextNodeId: 1,
    notes: {}
}

const CREATE_NODE = 'CREATE_NODE';
const UPDATE_NODE = 'UPDATE_NODE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NODE: {
            const id = state.nextNodeId
            const newNode = {
                id: id,
                content: ''
            }
            return {
                ...state,
                nextNodeId: id + 1,
                notes: {
                    ...state.notes,
                    [id]: newNode
                }
            }
        }


        case UPDATE_NODE: {
            const {id, content} = action;
            const editedNote = {
                ...state.notes[id],
                content
            };
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: editedNote
                }
            };
        }

        default:
            return state;
    }
}

// test data

const state0 = reducer(undefined, {
    type: CREATE_NODE
})

const state1 = reducer(state0, {
    type: UPDATE_NODE,
    id: 1,
    content: 'Hello World!',
})


document.getElementById('root').innerText = JSON.stringify(state1, null, 2)

