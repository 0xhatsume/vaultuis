import { combineReducers } from "redux";
import application from "./application";
import multicall from "./multicall/reducer";
import transactions from "./transactions/reducer";

const rootReducer = combineReducers({
    application,
    multicall,
    transactions,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
