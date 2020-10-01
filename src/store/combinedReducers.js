import { productReducer } from "./ducks/products/reducers";
import { favReducer } from "./ducks/favs/reducers";

import { combineReducers } from "redux";

export const CombinedReducers = combineReducers({
    productState: productReducer,
    favState: favReducer
});