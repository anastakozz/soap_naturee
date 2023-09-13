import { render, screen } from '@testing-library/react';
import DetailedProductPage from './detailedProductPage';
import { BrowserRouter } from 'react-router-dom';
import { setAnonymousToLocalStorage } from '../../setupTests';

it('renders detailedPage page in DOM', () => {
  setAnonymousToLocalStorage();
  render(
    <BrowserRouter>
      <DetailedProductPage />
    </BrowserRouter>
  );
  expect(screen.queryByText('Loading...')).toBeInTheDocument();
});
