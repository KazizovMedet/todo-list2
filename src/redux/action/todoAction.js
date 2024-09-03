import axios from "axios";
import {ADD_TODO, EDIT_TODO, GET_TODO, GET_TODOS} from "../types";

export const getTodos = () => {
  return dispatch => {
    axios('https://66b1a2ad1ca8ad33d4f49ffd.mockapi.io/todos')
      .then(({data}) => dispatch({type: GET_TODOS, payload: data}))
  }
}

export const getTodo = (id) => {
  return dispatch => {
    axios(`https://66b1a2ad1ca8ad33d4f49ffd.mockapi.io/todos/${id}`)
      .then(({data}) => dispatch({type: GET_TODO, payload: data}))
  }
}

export const addTodo = (newTodo) => {
  return dispatch => {
    axios.post('https://66b1a2ad1ca8ad33d4f49ffd.mockapi.io/todos', newTodo)
      .then(({data}) => dispatch({type: ADD_TODO, payload: data}))
  }
}

export const deleteTodo = (todo) => {
  return dispatch => {
    axios.delete(`https://66b1a2ad1ca8ad33d4f49ffd.mockapi.io/todos/${todo.id}`)
      .then(({data}) => dispatch({type: 'DELETE_TODO', payload: data}))
  }
}

export const editTodo = (todo) => {
  return dispatch => {
    axios.put(`https://66b1a2ad1ca8ad33d4f49ffd.mockapi.io/todos/${todo.id}`, todo)
      .then(({data}) => dispatch({type: EDIT_TODO, payload: data}))
  }
}