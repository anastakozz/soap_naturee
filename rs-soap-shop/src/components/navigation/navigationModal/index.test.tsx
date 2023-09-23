import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavigationModal from './index';

describe('NavigationModal', () => {
  it('should render the navigation links when isOpen is true', () => {
    const onCloseMock = jest.fn();
    const onLogoutMock = jest.fn();
    const { getByText } = render(
      <NavigationModal onLogout={onLogoutMock} isOpen={true} isLoggedIn={true} onClose={onCloseMock} />,
      {
        wrapper: MemoryRouter
      }
    );

    const homeLink = getByText('Home');
    const productsLink = getByText('Our products');
    const aboutUsLink = getByText('About us');

    expect(homeLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
  });

  it('should call onClose when a navigation link is clicked', () => {
    const onCloseMock = jest.fn();
    const onLogoutMock = jest.fn();

    const { getByText } = render(
      <NavigationModal onLogout={onLogoutMock} isOpen={true} isLoggedIn={true} onClose={onCloseMock} />,
      {
        wrapper: MemoryRouter
      }
    );

    const homeLink = getByText('Home');
    fireEvent.click(homeLink);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
