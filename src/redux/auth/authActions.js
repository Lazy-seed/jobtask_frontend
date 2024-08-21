import axios from 'axios';
import { BASEURL } from '../../jwttoken';
import toast from 'react-hot-toast';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASEURL}/api/auth/login`, credentials);
    console.log(response);
    toast.error("Hello World")
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("roleType", response.data.user.role)
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const signup = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASEURL}/api/auth/signup`, data);
    
    dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
  }
};
