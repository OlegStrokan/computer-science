export const validateAction = action => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object!');
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type!');
    }
};


export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const OPEN_NOTE = 'OPEN_NOTE';
export const CLOSE_NOTE = 'CLOSE_NOTE';
