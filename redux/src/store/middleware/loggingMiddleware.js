export const loggingMiddleware = ({ getState }) => next => action => {
    console.info('before', getState());
    console.info('action', action);
    const result = next(action);
    console.info('after', getState());
    return result;
}
