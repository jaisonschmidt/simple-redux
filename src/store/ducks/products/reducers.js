import { SET_PRODUCTS } from "./types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS :
            return {
                ...state,
                products: action.products
            };
        default: 
            return state;
    }
}