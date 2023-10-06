import { render } from '@testing-library/react';
import PageNotFound from '.';
import { BrowserRouter } from 'react-router-dom';

it('renders 404 page', () => {
  const component = render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
  expect(component.getByTestId('page-not-found')).toBeInTheDocument();
});
