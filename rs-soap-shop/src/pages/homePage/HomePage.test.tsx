import { render, screen } from '@testing-library/react';
import HomePage from '.';
import { BrowserRouter } from 'react-router-dom';
import { setAnonymousToLocalStorage } from '../../setupTests';

it('renders random cards section page in DOM', () => {
  setAnonymousToLocalStorage();
  render(
    <BrowserRouter>
      <HomePage></HomePage>
    </BrowserRouter>
  );
  expect(screen.getByRole('home-page')).toBeInTheDocument();
});
