import {CREATE_NODE, reducer} from "./reducer";

const validateAction = action => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error ('Action must be an object!');
    }
    if (typeof action.type === 'undefined') {
        throw new Error ('Action must have a type!');
    }
}

const createStore = (reducer) => {
    let state = undefined
    return {
        dispatch: (action) => {
            validateAction(action)
            state = reducer(state,action)
        },
        getState: () => state
    }
}



const store = createStore(reducer)

store.dispatch({
    type: CREATE_NODE
})

store.getState();


console.log(store)