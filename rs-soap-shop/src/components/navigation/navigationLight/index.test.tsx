import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './index';

describe('Navigation', () => {
  it('should render the navigation links', () => {
    const { getByText } = render(<Navigation />, {
      wrapper: MemoryRouter
    });

    const homeLink = getByText('Home');
    const productsLink = getByText('Our products');
    const aboutUsLink = getByText('About us');

    expect(homeLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
  });
});
