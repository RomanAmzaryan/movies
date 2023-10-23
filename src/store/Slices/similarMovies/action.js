import { fetchSimilarMovies } from "./API";

export const actionGetSimilarMovies = (payload) => {
    return {
        type: "similarMovies",
        payload,
    };
};

export const actionFetchSimilarMovies = (category, id) => {
    return async (dispatch) => {
        const res = await fetchSimilarMovies(category, id);
        dispatch({ type: "fetchSimilarMovies", payload: res.results });
    };
};
