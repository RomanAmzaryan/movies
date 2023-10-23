export const fetchSearchResults = async (query) => {
    const API_KEY = "b855ed8f8fd0381ce79a264df3f867ff";

    const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&include_adult=false`
    );
    return res.json();
};
