import { render, screen } from '@testing-library/react';
import BannerPageName from '.';

it('renders banner in DOM', () => {
  render(<BannerPageName {...{ children: 'test banner' }}></BannerPageName>);
  expect(screen.getByText('test banner')).toBeInTheDocument();
});
