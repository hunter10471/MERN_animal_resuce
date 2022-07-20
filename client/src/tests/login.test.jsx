import React from 'react';
import { expect, render } from '@testing-library/react';
import Login from '../pages/Login';


test('Login render Page', () => { //eslint-disable-line

  'renders the Login page',
  () => {
    const { getByText } = render(<Login />);
    expect(getByText(/login/i)).toBeInTheDocument();
  };
});

test('render 2 input components', () => { //eslint-disable-line

  const { getByPlaceholderText } = render(<Login />);
  expect(getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/password/i)).toBeInTheDocument();
});

test('renders a submit button', () => { //eslint-disable-line

  const { getByText } = render(<Login />);
  expect(getByText('Log in')).toBeInTheDocument();
});
