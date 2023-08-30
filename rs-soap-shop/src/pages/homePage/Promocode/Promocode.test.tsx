import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Promocode from './Promocode';

it('renders random section in DOM', () => {
  render(
    <BrowserRouter>
      <Promocode />
    </BrowserRouter>
  );
  expect(screen.queryByRole('link')).toBeInTheDocument();
});