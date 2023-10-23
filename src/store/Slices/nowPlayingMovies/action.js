import { fetchNowPlayingMovies } from "./API";

export const getNowPlayingMovies = (payload) => {
    return {
        type: "nowPlayingMovies",
        payload,
    };
};

export const actionFetchNowPlayingMovies = (category) => {
    return async (dispatch) => {
        const res = await fetchNowPlayingMovies(category);

        dispatch({
            type: "fetchNowPlayingMovies",
            payload: res.results,
        });
    };
};
