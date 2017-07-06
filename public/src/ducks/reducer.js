import axios from "axios";
import api from "../api";

const initialState = {
  user: null,
  properties: []
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";

const GET_PROPERTIES = "GET_PROPERTIES";
const CREATE_PROPERTY = "CREATE_PROPERTY";
const DELETE_PROPERTY = "DELETE_PROPERTY";

export default ( state = initialState, action ) => {
  const { payload } = action;

  switch( action.type ) {
    case LOGIN + '_FULFILLED':
      return {
        user: payload,
        properties: []
      }

    case REGISTER + '_FULFILLED':
      return {
        user: payload,
        properties: []
      }

    case LOGOUT + '_FULFILLED':
      return {
        user: null,
        properties: []
      }

    default: return state;
  }
}

export function login( obj, history ) {
  const promise = axios.post( `${api.auth}/login`, obj ).then( response => {
    history.push('/dashboard');
    return response.data;
  });

  return {
    type: LOGIN,
    payload: promise
  }
}

export function register( obj, history ) {
  const promise = axios.post( `${api.auth}/register`, obj ).then( response => {
    history.push('/dashboard');
    return response.data;
  });

  return {
    type: REGISTER,
    payload: promise
  }
}

export function logout( history ) {
  const promise = axios.post( `${api.auth}/logout` ).then( () => {
    history.push('/login');
  });

  return {
    type: LOGOUT,
    payload: promise
  }
}