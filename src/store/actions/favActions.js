import { ADD_FAV } from "../types/favTypes";

export const addFav = product => ({
    type: ADD_FAV,
    product
})