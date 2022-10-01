const initialState = {
    nextNodeId: 1,
    notes: {}
}

export const CREATE_NODE = 'CREATE_NODE';
export const UPDATE_NODE = 'UPDATE_NODE';

export const reducer = (state = initialState, action) => {
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