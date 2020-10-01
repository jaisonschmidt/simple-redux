import { productReducer } from "./productReducer";
import { favReducer } from "./favReducer";

import { combineReducers } from "redux";

export const Reducers = combineReducers({
    productState: productReducer,
    favState: favReducer
});