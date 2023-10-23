import { fetchCurrentUser } from "./API";

export const actionCurrentUser = (payload) => {
    return {
        type: "currentUser",
        payload,
    };
};

export const actionFetchCurrentUser = (id) => {
    return async (dispatch) => {
        const res = await fetchCurrentUser(id);
        dispatch({
            type: "currentUser",
            payload: res,
        });
    };
};
