export const initalCurrentUser = {};

export const currentUserReducer = (state = initalCurrentUser, action) => {
    switch (action.type) {
        case "currentUser":
            return action.payload;
        default:
            return state;
    }
};

export const selectCurrentUser = (state) => state.currentUser;
