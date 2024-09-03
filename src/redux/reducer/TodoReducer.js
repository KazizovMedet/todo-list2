import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO, GET_TODOS} from "../types";

const initialState = {
  todos: [],
  todo: {}
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state, todos: action.payload
      }
    case GET_TODO:
      return {
        ...state, todo: action.payload
      }
    case ADD_TODO:
      return {
        ...state, todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state, todos: state.todos.filter(el => el.id !== action.payload.id)
      }
    case EDIT_TODO:
      return {
        ...state, todos: state.todos.map(el => el.id === action.payload.id ? action.payload : el)
      }
    default:
      return state
  }
}