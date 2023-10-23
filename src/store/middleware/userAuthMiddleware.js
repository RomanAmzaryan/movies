export const userAuthMiddleware = (store) => (next) => (action) => {
    if (action.type === "authUser" && !action.payload) {
        return;
    }
    next(action);
};
