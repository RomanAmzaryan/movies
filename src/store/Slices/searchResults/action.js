import { fetchSearchResults } from "./API";

export const actionGetSearchResults = (payload) => {
    return {
        type: "searchResults",
        payload,
    };
};

export const actionFetchSearchResults = (query) => {
    return async (dispatch) => {
        const res = await fetchSearchResults(query);
        dispatch({ type: "fetchSearchResults", payload: res.results });
    };
};
