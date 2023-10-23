export const initalMovieTrailer = {};

export const movieTrailerReducer = (state = initalMovieTrailer, action) => {
    switch (action.type) {
        case "fetchMovieTrailer":
            return action.payload;
        case "movieTrailer":
            return action.payload;
        default:
            return state;
    }
};

export const selectMovieTrailer = (state) => state.movieTrailer;
