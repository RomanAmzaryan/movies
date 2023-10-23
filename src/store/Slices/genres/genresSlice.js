export const initalGenres = [];

export const genresReducer = (state = initalGenres, action) => {
    switch (action.type) {
        case "fetchGenres":
            return action.payload;
        case "genres":
            return action.payload;
        default:
            return state;
    }
};

export const selectGenres = (state) => state.genres;
