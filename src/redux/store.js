import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {todoReducer} from "./reducer/TodoReducer";

export const store = createStore(
  todoReducer,
  composeWithDevTools(
    applyMiddleware(),
  )
)
