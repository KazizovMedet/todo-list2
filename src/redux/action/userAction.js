import axios from "axios";
import {GET_USER, GET_USERS, REGISTER_USER} from "../types";
import {history} from "../../Services/history";
import Cookies from 'js-cookie'

export const getUsers = () => {
  return dispatch => {
    axios('https://66b1a2ad1ca8ad33d4f49ffd.mockapi.io/users')
      .then(({data}) => dispatch({type: GET_USERS, payload: data}))
  }
}

export const registerUser = (newUser) => {
  return dispatch => {
    axios.post('https://kamil123456780.pythonanywhere.com/api/register/', newUser)
      .then(({data}) => history.push('/sign-in'))
  }
}

export const logoutUser = () => {
  return dispatch => {
    Cookies.remove('token')
    Cookies.remove('user')
  }
}

export const getMyUser = () => {
  const token = Cookies.get('token')
  return dispatch => {
    axios.get('https://kamil123456780.pythonanywhere.com/api/profile/', {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(({data}) => {
        Cookies.set('user', JSON.stringify(data))
        dispatch({type: GET_USER, payload: data})
        history.push('/')
      })

  }
}

export const signIn = (data) => {
  return dispatch => {
    axios.post('https://kamil123456780.pythonanywhere.com/api/login/', data)
      .then(({data}) => {
        Cookies.set('token', data.access)
        localStorage.setItem('token', data.access)
        dispatch(getMyUser())
      })
  }
}