import AddButton, { AddButtonProps } from './AddButton';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedCallback = jest.fn();

it('renders active button', () => {
  const Props: AddButtonProps = {
    isInCart: false,
    isSending: false,
    onClick: mockedCallback
  };
  render(<AddButton {...Props} />);
  expect(screen.getByRole('active-button')).toBeInTheDocument();
});

it('renders disabled button', () => {
  const Props: AddButtonProps = {
    isInCart: true,
    isSending: false,
    onClick: mockedCallback
  };
  render(<AddButton {...Props} />);
  expect(screen.getByRole('disabled-button')).toBeInTheDocument();
});

it('renders loading button', () => {
  const Props: AddButtonProps = {
    isInCart: true,
    isSending: true,
    onClick: mockedCallback
  };
  render(<AddButton {...Props} />);
  expect(screen.getByRole('loading-button')).toBeInTheDocument();
});

it('calls a function', () => {
  const Props: AddButtonProps = {
    isInCart: false,
    isSending: false,
    onClick: mockedCallback
  };
  render(<AddButton {...Props} />);
  fireEvent.click(screen.getByRole('active-button'));
  expect(mockedCallback).toBeCalled();
});
