export const watchlistMiddleware = (store) => (next) => (action) => {
    if (action.type === "addToWatchList" && action.payload) {
        const { watchlist } = store.getState();
        action.payload = [...watchlist, action.payload];
    }
    if (action.type === "deleteFromWatchList" && action.payload) {
        const { watchlist } = store.getState();
        action.payload = watchlist.filter(
            (movie) => movie.id !== action.payload
        );
    }
    next(action);
};
