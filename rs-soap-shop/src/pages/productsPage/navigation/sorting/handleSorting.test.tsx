import handleSorting from './handleSorting';
import { render, screen } from '@testing-library/react';

describe('handleSorting function', () => {
  const mockChangeSortingParameters = jest.fn();

  it('should toggle class for priceUp when sortMethod is priceUp', () => {
    render(
      <>
        <div className='priceUp'>priceUp</div>
        <div className='priceDown'></div>
        <div className='sortAbc'></div>
        <div className='sortZyx'></div>
      </>
    );
    const component = screen.getByText('priceUp');
    handleSorting('priceUp', mockChangeSortingParameters);
    expect(component).toHaveClass('bg-grayLColor/90');

    handleSorting('priceUp', mockChangeSortingParameters);
    expect(component).not.toHaveClass('bg-grayLColor/90');
  });
});
