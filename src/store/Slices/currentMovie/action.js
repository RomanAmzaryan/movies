import { fetchCurrentMovie } from "./API";

export const actionGetCurrentMovie = (payload) => {
    return {
        type: "currentMovie",
        payload,
    };
};

export const actionFetchCurrentMovie = (id, category) => {
    return async (dispatch) => {
        const res = await fetchCurrentMovie(id, category);
        dispatch({
            type: "fetchCurrentMovie",
            payload: res,
        });
    };
};
