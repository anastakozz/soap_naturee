import { render, screen, fireEvent } from '@testing-library/react';
import FilterView from './filterView';

const mockedCallback = jest.fn();

it('renders filter menu in DOM', () => {
  render(<FilterView changeQuery={mockedCallback} />);
  const menu = screen.getByRole('filter-menu');
  expect(menu).toBeInTheDocument();
});

it('closes filter-menu on filter click', () => {
  render(<FilterView changeQuery={mockedCallback} />);
  fireEvent.click(screen.getByRole('toggler'));
  fireEvent.click(screen.getByRole('filter-button'));
  expect(screen.getByRole('filter-menu').classList).toContain('invisible');
});

it('closes filter-menu on reset click', () => {
    render(<FilterView changeQuery={mockedCallback} />);
    fireEvent.click(screen.getByRole('toggler'));
    fireEvent.click(screen.getByRole('reset-button'));
    expect(screen.getByRole('filter-menu').classList).toContain('invisible');
  });
