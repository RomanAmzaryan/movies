export const initalReviews = [];

export const reviewsReducer = (state = initalReviews, action) => {
    switch (action.type) {
        case "fetchReviews":
            return action.payload;
        case "reviews":
            return action.payload;

        default:
            return state;
    }
};

export const selectReviews = (state) => state.reviews;
