import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoReducer} from "./reducer/TodoReducer";
import {thunk} from "redux-thunk";
import {userReducer} from "./reducer/UserReducer";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";

export const store = createStore(
  combineReducers({
    todo: todoReducer,
    user: userReducer
  }),
  composeWithDevToolsDevelopmentOnly(
    applyMiddleware(thunk),
  )
)
