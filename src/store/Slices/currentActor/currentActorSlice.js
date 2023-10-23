export const initalCurrentActor = {};

export const currentActorReducer = (state = initalCurrentActor, action) => {
    switch (action.type) {
        case "fetchCurrentActor":
            return action.payload;
        case "currentActor":
            return action.payload;
        default:
            return state;
    }
};

export const selectCurrentActor = (state) => state.currentActor;
