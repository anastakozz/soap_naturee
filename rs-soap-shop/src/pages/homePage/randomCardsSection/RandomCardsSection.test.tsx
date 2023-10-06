import { render, screen } from '@testing-library/react';
import { CartContext } from '../../../App';
import RandomCardsSection from './RandomCardsSection';

it('renders random cards section page in DOM', () => {
  render(
    <CartContext.Provider value={[null]}>
      <RandomCardsSection />
    </CartContext.Provider>
  );
  expect(screen.getByRole('random-section')).toBeInTheDocument();
});
