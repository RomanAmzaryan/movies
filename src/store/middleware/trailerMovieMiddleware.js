export const trailerMiddleware = (store) => (next) => (action) => {
    if (action.type === "fetchTrailer" && !action.payload) {
        return;
    }
    next(action);
};
