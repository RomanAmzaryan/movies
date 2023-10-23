export const fetchSimilarMovies = async (category, id) => {
    const API_KEY = "b855ed8f8fd0381ce79a264df3f867ff";

    const res = await fetch(
        `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=${API_KEY}`
    );

    return res.json();
};
