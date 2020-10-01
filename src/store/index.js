import { createStore } from "redux";

import { CombinedReducers } from "./combinedReducers";

export const Store = createStore(CombinedReducers);