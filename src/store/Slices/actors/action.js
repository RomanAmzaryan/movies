import { fetchActors } from "./API";

export const actionGetActors = (payload) => {
    return {
        type: "actors",
        payload,
    };
};

export const actionFetchActors = () => {
    return async (dispatch) => {
        const res = await fetchActors();

        dispatch({
            type: "fetchActors",
            payload: res.results,
        });
    };
};
