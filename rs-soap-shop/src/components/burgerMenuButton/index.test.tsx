import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BurgerMenuButton from './index';

describe('BurgerMenuButton', () => {
  it('should render the closed menu icon when isMenuOpen is false', () => {
    const onClickMock = jest.fn();
    const { container } = render(<BurgerMenuButton isMenuOpen={false} onClick={onClickMock} />);

    const closedMenuIcon = container.querySelector('.HAMBURGER-ICON');
    expect(closedMenuIcon).toBeInTheDocument();

    if (closedMenuIcon) {
      const lines = closedMenuIcon.querySelectorAll('.bg-grayLColor');
      expect(lines.length).toBe(3);
    }
  });

  it('should render the open menu icon when isMenuOpen is true', () => {
    const onClickMock = jest.fn();
    const { container } = render(<BurgerMenuButton isMenuOpen={true} onClick={onClickMock} />);

    const openMenuIcon = container.querySelector('svg');
    expect(openMenuIcon).toBeInTheDocument();

    if (openMenuIcon) {
      const lines = openMenuIcon.querySelectorAll('line');
      expect(lines.length).toBe(2);
    }
  });

  it('should call the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(<BurgerMenuButton isMenuOpen={false} onClick={onClickMock} />);

    const closedMenuIcon = container.querySelector('.HAMBURGER-ICON');

    if (closedMenuIcon) {
      fireEvent.click(closedMenuIcon);
    }

    expect(onClickMock).toHaveBeenCalled();
  });
});
