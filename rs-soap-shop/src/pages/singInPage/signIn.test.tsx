import { render, screen } from '@testing-library/react';
import SingInPage from '.';
import { BrowserRouter } from 'react-router-dom';

it('renders SignUp page in DOM', () => {
  render(
    <BrowserRouter>
      <SingInPage />
    </BrowserRouter>
  );

  expect(screen.queryByText('Sign In form:')).toBeInTheDocument();
});
