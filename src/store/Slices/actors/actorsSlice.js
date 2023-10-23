export const initalActors = [];

export const actorsReducer = (state = initalActors, action) => {
    switch (action.type) {
        case "fetchActors":
            return action.payload;
        case "actors":
            return action.payload;
        default:
            return state;
    }
};

export const selectActors = (state) => state.actors;
