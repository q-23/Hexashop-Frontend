import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';
import { MemoryRouter as Router } from 'react-router-dom';
import StateProviderMenu from "contexts/reducers/menu";

test('renders learn react link', () => {
  const wrapper = render(
    <Router keyLength={0}>
      <StateProviderMenu>
        <App />
      </StateProviderMenu>
    </Router>
    );
  expect(wrapper).toMatchSnapshot();
});
