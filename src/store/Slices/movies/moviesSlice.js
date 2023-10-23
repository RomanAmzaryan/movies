export const initalMovies = [];

export const moviesReducer = (state = initalMovies, action) => {
    switch (action.type) {
        case "fetchMovies":
            return action.payload || null;
        case "movies":
            return action.payload || null;
        default:
            return state;
    }
};

export const selectMovies = (state) => state.movies;
