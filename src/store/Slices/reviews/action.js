import { fetchReviews } from "./API";

export const actionGetReviews = (payload) => {
    return {
        type: "reviews",
        payload,
    };
};

export const actionFetchReviews = (category, id) => {
    return async (dispatch) => {
        const res = await fetchReviews(category, id);
        dispatch({ type: "fetchReviews", payload: res.results || null });
    };
};
