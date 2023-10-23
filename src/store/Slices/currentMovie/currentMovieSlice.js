export const initialCurrentMovie = {};

export const currentMovieReducer = (state = initialCurrentMovie, action) => {
    switch (action.type) {
        case "fetchCurrentMovie":
            return action.payload;
        case "currentMovie":
            return action.payload;
        default:
            return state;
    }
};

export const selectCurrentMovie = (state) => state.currentMovie;
