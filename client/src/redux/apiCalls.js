import React from 'react';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './userRedux';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
    return error;
  }
};

const logout = async (dispatch) => {
  try {
    <Navigate to='/login' />;
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
    return error;
  }
};
