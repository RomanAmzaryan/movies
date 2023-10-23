export const initalTopRatedMovies = [];

export const topRatedMoviesReducer = (state = initalTopRatedMovies, action) => {
    switch (action.type) {
        case "fetchTopRatedMovies":
            return action.payload;
        case "topRatedMovies":
            return action.payload;
        default:
            return state;
    }
};

export const selectTopRatedMovies = (state) => state.topRatedMovies;
