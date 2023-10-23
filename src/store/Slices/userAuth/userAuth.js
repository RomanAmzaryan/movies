export const initalUserAuth = false;

export const userAuthReducer = (state = initalUserAuth, action) => {
    switch (action.type) {
        case "userAuth":
            return action.payload;
        default:
            return state;
    }
};

export const selectUserAuth = (state) => state.userAuth;
