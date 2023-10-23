export const fetchMovies = async (category, id) => {
    const API_KEY = "b855ed8f8fd0381ce79a264df3f867ff";

    const res = await fetch(
        `https://api.themoviedb.org/3/discover/${category}?api_key=${API_KEY}&with_genres=${id}&includes_adult=false`
    );
    return res.json();
};
