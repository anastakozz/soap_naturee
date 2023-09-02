import { render, screen } from '@testing-library/react';
import HomePage from '.';
import { BrowserRouter } from 'react-router-dom';

it('renders random cards section page in DOM', () => {
  render(<BrowserRouter><HomePage></HomePage></BrowserRouter>);
  expect(screen.getByRole('home-page')).toBeInTheDocument();
});