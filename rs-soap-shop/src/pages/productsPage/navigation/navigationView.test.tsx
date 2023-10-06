import { NavigationView } from './navigationView';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const mockedCallback = jest.fn();

it('renders filter menu in DOM', () => {
  render(
    <BrowserRouter>
      <NavigationView nav={{ category: 'sale' }} changeQuery={mockedCallback} />
    </BrowserRouter>
  );
  const nav = screen.getByRole('catalog-nav');
  expect(nav).toBeInTheDocument();
});
