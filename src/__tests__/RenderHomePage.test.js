import RenderHomePage from '../components/pages/Home/RenderHomePage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<RenderHomePage /> test suite', () => {
  test('it handles a loading state', () => {
    const authService = {
      logout: jest.fn(),
    };
    const { getByText } = render(
      <Router>
        <RenderHomePage userInfo={{ name: 'Sara' }} authService={authService} />
      </Router>
    );
    const button = getByText(/logout/i);
    userEvent.click(button);
    expect(authService.logout).toHaveBeenCalledTimes(1);
    expect(getByText(/hi Sara welcome to Paired!/i).innerHTML).toBe(
      'hi Sara welcome to Paired!'
    );
  });
});
