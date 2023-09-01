import { render, screen } from '@testing-library/react';
import DetailedProductPage from './detailedProductPage';
import { BrowserRouter } from 'react-router-dom';

it('renders detailedPage page in DOM', () => {
  render(
    <BrowserRouter>
      <DetailedProductPage />
    </BrowserRouter>
  );
  expect(screen.queryByText('Loading...')).toBeInTheDocument();
});
