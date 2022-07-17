import React from 'react';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './userRedux';
import { Navigate } from 'react-router-dom';

export const login = async (dispatch, data) => {
  dispatch(loginStart());
  try {
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
    return error;
  }
};

export const logout = async (dispatch) => {
  try {
    <Navigate to='/login' />;
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
    return error;
  }
};
