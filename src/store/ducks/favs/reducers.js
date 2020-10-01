import { ADD_FAV } from "./types";

const initialState = {
    favs: []
};

export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV :
            return {
                ...state,
                favs: [...state.favs, action.product]
            };
        default:
            return state;
    }
}
