import React from 'react';
import { expect, render } from '@testing-library/react';
import Login from '../pages/Login';

/* eslint-disable */

test('Login render Page', () => {

  'renders the Login page',
  () => {
    const { getByText } = render(<Login />);
    expect(getByText(/login/i)).toBeInTheDocument();
  };
});

test('render 2 input components', () => {

  const { getByPlaceholderText } = render(<Login />);
  expect(getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/password/i)).toBeInTheDocument();
});

test('renders a submit button', () => {

  const { getByText } = render(<Login />);
  expect(getByText('Log in')).toBeInTheDocument();
});
