import { render, screen } from '@testing-library/react';
import RandomCardsSection from './RandomCardsSection';
import { setAnonymousToLocalStorage } from '../../../setupTests';

it('renders random cards section page in DOM', () => {
  setAnonymousToLocalStorage();
  render(<RandomCardsSection />);

  expect(screen.getByRole('random-section')).toBeInTheDocument();
});
