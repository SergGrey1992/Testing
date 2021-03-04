import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./app_reducer";
import {brandsReducer} from "./Brands_reducer";
import {cardReducer} from "./card_reducer";

const reducer = combineReducers({
	brandsReducer: brandsReducer,
	appReducer: appReducer,
	cardReducer: cardReducer
})
export type RootStoreType = ReturnType<typeof reducer>
export const store = createStore(reducer, applyMiddleware(thunk))