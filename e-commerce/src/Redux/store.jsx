import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import  AppReducer  from "./AppReducer/App_Reducer";
import AuthReducer from "./AuthReducer/Auth_Reducer";
import CartReducer from "./CartReducer/CartReducer";
import thunk from "redux-thunk";

const allReducer = combineReducers({ AppReducer, AuthReducer,CartReducer });

export const store = legacy_createStore(allReducer, applyMiddleware(thunk));
