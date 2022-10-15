import {validateAction} from "./actions";

export const createStore = reducer => {
    let state;
    const subscribers = [];
    const store = {
        dispatch: action => {
            validateAction(action);
            state = reducer(state, action);
            subscribers.forEach(handler => handler());
        },
        getState: () => state,
        subscribe: handler => {
            subscribers.push(handler);
            return () => {
                const index = subscribers.indexOf(handler);
                if (index > 0) {
                    subscribers.splice(index, 1);
                }
            };
        }
    };
    store.dispatch({type: '@@redux/INIT'});
    return store;
};
