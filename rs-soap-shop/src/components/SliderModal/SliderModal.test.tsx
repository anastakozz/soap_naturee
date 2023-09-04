import SliderModal from './SliderModal';
import { render, screen } from '@testing-library/react';

it('renders a modal in DOM', () => {
  render(<SliderModal {...{ isVisible: true, paths: ['test-url-1', 'test-url-2'] }}> </SliderModal>);
  const component = screen.queryByText('CLOSE');
  expect(component).toBeInTheDocument();
});

it('renders no controls in DOM', () => {
  render(<SliderModal {...{ isVisible: true, paths: ['test-url-1'] }}> </SliderModal>);
  const component = screen.queryByRole('button');
  expect(component).not.toBeInTheDocument();
});

