import { render, screen } from '@testing-library/react';
import AboutPage from '.';
import { BrowserRouter } from 'react-router-dom';

it('renders AboutPage page in DOM', () => {
  render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
  );

  expect(screen.queryByText('AboutPage works!')).toBeInTheDocument();
});