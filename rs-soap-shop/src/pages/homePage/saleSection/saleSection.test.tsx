import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SaleSection from './saleSection';

it('renders section page in DOM', () => {
  render(
    <BrowserRouter>
      <SaleSection />
    </BrowserRouter>
  );
  expect(screen.queryByText('Take a Look at Our Big Sale')).toBeInTheDocument();
});
