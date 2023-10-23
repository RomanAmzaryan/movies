import { fetchNewReviews } from "./API";

export const actionGetNewReviews = (payload) => {
    return {
        type: "newReviews",
        payload,
    };
};

export const actionFetchNewReviews = (id) => {
    return async (dispatch) => {
        const res = await fetchNewReviews(id);
        dispatch({
            type: "fetchNewReviews",
            payload: res,
        });
    };
};
