export const initalWatchlist = [];

export const watchlistReducer = (state = initalWatchlist, action) => {
    switch (action.type) {
        case "addToWatchList":
            return action.payload;
        case "deleteFromWatchList":
            return action.payload;
        default:
            return state;
    }
};

export const selectWatchlist = (state) => state.watchlist;
