import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import LoginArea from './index';

describe('LoginArea', () => {
  it('should render the logged out user interface correctly', () => {
    const onLogoutMock = jest.fn();

    const { getByText, container } = render(<LoginArea onLogout={onLogoutMock} isLoggedIn={false} />, {
      wrapper: MemoryRouter
    });

    const signInLink = getByText('Sign in');
    const signUpLink = getByText('Sign up');
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();

    const profileIcon = container.querySelector('profile-icon');
    const logoutIcon = container.querySelector('logout-icon');
    expect(profileIcon).not.toBeInTheDocument();
    expect(logoutIcon).not.toBeInTheDocument();
  });
});
