import axios from "axios";
import api from "../api";

const initialState = {
  user: null,
  properties: []
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

export default ( state = initialState, action ) => {
  const { payload } = action;

  switch( action.type ) {
    case LOGIN + '_FULFILLED':
      return {
        user: payload.data,
        properties: []
      }

    case REGISTER + '_FULFILLED':
      return {
        user: payload.data,
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
    history.push('/login');
    return response.data;
  });

  return {
    type: REGISTER,
    payload: promise
  }
}