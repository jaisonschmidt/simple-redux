import { ADD_FAV } from "../types/favTypes";

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
