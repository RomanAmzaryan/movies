export const initalNewReviews = [];

export const newReviewsReducer = (state = initalNewReviews, action) => {
    switch (action.type) {
        case "fetchNewReviews":
            return action.payload;
        case "newReviews":
            return action.payload;
        default:
            return state;
    }
};

export const selectNewReviews = (state) => state.newReviews;
