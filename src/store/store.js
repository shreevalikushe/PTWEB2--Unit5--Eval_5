import { combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { userReducer } from "./users/reducer";
const mainReducer = combineReducers({ auth: authReducer, user: userReducer });
export const store = createStore(
  mainReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);

console.log(store.getState());
