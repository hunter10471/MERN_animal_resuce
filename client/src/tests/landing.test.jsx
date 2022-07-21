import { expect, render } from '@testing-library/react';
import React from 'react';
import Landing from '../components/Landing';

/* eslint-disable */

test('Main heading appears.', () => {
  const { getByTestId } = render(<Landing />);
  expect(getByTestId('landing-heading')).toBeInTheDocument();
});
