export const initalSearchResults = [];

export const searchResultsReducer = (state = initalSearchResults, action) => {
    switch (action.type) {
        case "fetchSearchResults":
            return action.payload;

        case "searchResults":
            return action.payload;
            
        default:
            return state;
    }
};

export const selectSearchResults = (state) => state.searchResults;
