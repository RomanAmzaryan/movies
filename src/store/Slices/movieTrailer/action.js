import { fetchMovieTrailer } from "./API";

export const actionGetMovieTrailer = (payload) => {
    return {
        type: "movieTrailer",
        payload,
    };
};

export const actionFetchMovieTrailer = (category, id) => {
    return async (dispatch) => {
        const res = await fetchMovieTrailer(category, id);
        if (res && res.results) {
            const trailer = res.results.find(
                (video) =>
                    video.name.includes("Official") ||
                    video.name.includes("official") ||
                    video.name.includes("Trailer") ||
                    video.name.includes("trailer") ||
                    video.name.includes("Original") ||
                    video.name.includes("original") ||
                    video.name.includes("Promos") ||
                    video.name.includes("Episode") ||
                    video.name.includes("HD")
            );
            dispatch({
                type: "fetchMovieTrailer",
                payload: trailer || null,
            });
        }
    };
};
