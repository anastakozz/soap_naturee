import { render, screen } from '@testing-library/react';
import DetailedProductPage from './detailedProductPage';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../App';


it('renders detailedPage page in DOM', () => {
  render(
    <CartContext.Provider value={[null]}>
      <BrowserRouter>
        <DetailedProductPage />
      </BrowserRouter>
    </CartContext.Provider>
  );

  expect(screen.queryByText('Loading...')).toBeInTheDocument();
});
