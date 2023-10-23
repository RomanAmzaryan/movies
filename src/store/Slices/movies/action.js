import { fetchMovies } from "./API";

export const actionGetMovies = (payload) => {
    return {
        type: "movies",
        payload,
    };
};

export const actionFetchMovies = (category, id) => {
    return async (dispatch) => {
        const res = await fetchMovies(category, id);
        dispatch({
            type: "fetchMovies",
            payload: res.results,
        });
    };
};
