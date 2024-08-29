export const getTodos = (todos) => {
  return {type: 'GET_TODOS', payload: todos}
}

export const addTodo = (newTodo) => {
  return {type: 'ADD_TODO', payload: newTodo}
}

export const deleteTodo = (todo) => {
  return {type: 'DELETE_TODO', payload: todo}
}