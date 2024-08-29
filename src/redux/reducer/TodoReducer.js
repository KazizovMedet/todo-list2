const initialState = {
  todos: [],
  todo: {}
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state, todos: action.payload
      }
    case 'ADD_TODO':
      return {
        ...state, todos: [...state.todos, action.payload]
      }
    case 'DELETE_TODO':
      return {
        ...state, todos: state.todos.filter(el => el.id !== action.payload.id)
      }
    default:
      return state
  }
}