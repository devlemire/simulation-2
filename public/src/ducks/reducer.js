import axios from "axios";
import api from "../api";

const initialState = {
  user: null,
  properties: []
};

const LOGIN = "LOGIN";

export default ( state = initialState, action ) => {
  const { payload } = action;

  switch( action.type ) {
    case LOGIN + '_FULFILLED':
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