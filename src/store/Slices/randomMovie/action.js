import { fetchRandomMovie } from "./API";

export const actionGetRandomMovie = (payload) => {
    return {
        type: "randomMovie",
        payload,
    };
};

export const actionFetchRandomMovie = (randomPage) => {
    return async (dispatch) => {
        const res = await fetchRandomMovie(randomPage);
        if (res.results) {
            const randomIndex = Math.round(Math.random() * res.results.length);
            const randomMovie = res.results[randomIndex];
            dispatch({ type: "fetchRandomMovie", payload: randomMovie });
        }
    };
};
