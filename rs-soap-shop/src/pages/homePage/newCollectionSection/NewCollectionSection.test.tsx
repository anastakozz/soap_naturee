import { render, screen } from '@testing-library/react';
import NewCollectionSection from './NewCollectionSection';
import { BrowserRouter } from 'react-router-dom';

it('renders section page in DOM', () => {
  render(
    <BrowserRouter>
      <NewCollectionSection />
    </BrowserRouter>
  );
  expect(screen.queryByText('Discover Our New Collection')).toBeInTheDocument();
});
