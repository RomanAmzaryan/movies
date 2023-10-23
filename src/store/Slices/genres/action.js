import { fetchGenres } from "./API";

export const actionGetGenres = (payload) => {
    return {
        type: "genres",
        payload,
    };
};

export const actionFetchGenres = (category) => {
    return async (dispatch) => {
        const res = await fetchGenres(category);

        dispatch({ type: "fetchGenres", payload: res.genres });
    };
};
