import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CheckoutSection from './checkOutSection';

it('renders section page in DOM', () => {
  render(
    <BrowserRouter>
      <CheckoutSection />
    </BrowserRouter>
  );
  expect(screen.queryByText('Check out our product categories')).toBeInTheDocument();
});
