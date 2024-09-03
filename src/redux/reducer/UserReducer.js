import {GET_USER, GET_USERS} from "../types";

const initialState = {
  users: [],
  user: {},
  currentUser: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state, users: action.payload
      }
    case GET_USER:
      return {
        ...state, user: action.payload
      }
    default:
      return state
  }
}