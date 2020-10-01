import { SET_PRODUCTS } from "../types/productTypes";

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products,
});