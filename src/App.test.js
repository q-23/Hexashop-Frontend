import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
  const wrapper = render(
    <Router keyLength={0}>
      <App />
    </Router>
    );
  expect(wrapper).toMatchSnapshot();
});
