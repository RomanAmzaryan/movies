import { fetchTopRatedMovies } from "./API";

export const actionGetTopRatedMovies = (payload) => {
    return {
        type: "topRatedMovies",
        payload,
    };
};

export const actionFetchTopRatedMovies = (category) => {
    return async (dispatch) => {
        const res = await fetchTopRatedMovies(category);
        dispatch({ type: "fetchTopRatedMovies", payload: res.results });
    };
};
