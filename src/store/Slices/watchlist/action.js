export const actionWatchlist = (payload) => {
    return {
        type: "addToWatchList",
        payload,
    };
};

export const actionDeleteFromWatchList = (payload) => {
    return {
        type: "deleteFromWatchList",
        payload,
    };
};
