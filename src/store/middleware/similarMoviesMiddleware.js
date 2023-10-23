export const similarMoviesMiddleware = (store) => (next) => (action) => {
    if (action.type === "fetchSimilarMovies" && !action.payload) {
        return;
    }
    next(action);
};
