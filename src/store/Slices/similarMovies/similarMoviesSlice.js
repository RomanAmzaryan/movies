export const initalSimilarMovies = [];

export const similarMoviesReducer = (state = initalSimilarMovies, action) => {
    switch (action.type) {
        case "fetchSimilarMovies":
            return action.payload;
        case "similarMovies":
            return action.payload;
        default:
            return state;
    }
};

export const selectSimilarMovies = (state) => state.similarMovies;
