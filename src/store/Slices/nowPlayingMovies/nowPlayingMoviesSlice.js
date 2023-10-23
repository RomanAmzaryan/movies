export const initalNowPlayingMovies = [];

export const nowPlayingMoviesReducer = (
    state = initalNowPlayingMovies,
    action
) => {
    switch (action.type) {
        case "fetchNowPlayingMovies":
            return action.payload;
        case "nowPlayingMovies":
            return action.payload;
        default:
            return state;
    }
};

export const selectNowPlayingMovies = (state) => state.nowPlayingMovies;
