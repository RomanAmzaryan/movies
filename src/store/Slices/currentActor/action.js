import { fetchCurrentActor } from "./API";

export const actionGetCurrentActor = (payload) => {
    return {
        type: "currentActor",
        payload,
    };
};

export const actionFetchCurrentActor = (id) => {
    return async (dispatch) => {
        const res = await fetchCurrentActor(id);
        dispatch({
            type: "fetchCurrentActor",
            payload: res,
        });
    };
};
