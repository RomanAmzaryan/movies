export const initalRandomMovie = {};

export const randomMovieReducer = (state = initalRandomMovie, action) => {
    switch (action.type) {
        case "fetchRandomMovie":
            return action.payload ? action.payload : initalRandomMovie;
        case "randomMovie":
            return action.payload ? action.payload : initalRandomMovie;
        default:
            return state;
    }
};

export const selectRandomMovie = (state) => state.randomMovie;
