import {CLOSE_NOTE, CREATE_NOTE, OPEN_NOTE, UPDATE_NOTE} from "./actions";

const initialState = {
    notes: {},
    openNoteId: null,
    isLoading: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE: {
            if (!action.id) {
                return {
                    ...state,
                    isLoading: true
                };
            }
            const newNote = {
                id: action.id,
                content: ''
            };
            return {
                ...state,
                isLoading: false,
                openNoteId: action.id,
                notes: {
                    ...state.notes,
                    [action.id]: newNote
                }
            };
        }
        case UPDATE_NOTE: {
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
        case OPEN_NOTE: {
            return {
                ...state,
                openNoteId: action.id
            };
        }
        case CLOSE_NOTE: {
            return {
                ...state,
                openNoteId: null
            };
        }
        default:
            return state;
    }
};
