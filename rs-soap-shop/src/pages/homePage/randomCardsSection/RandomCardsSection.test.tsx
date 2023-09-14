import { render, screen } from '@testing-library/react';
import RandomCardsSection from './RandomCardsSection';

it('renders random cards section page in DOM', () => {
  render(<RandomCardsSection />);
  expect(screen.getByRole('random-section')).toBeInTheDocument();
});
