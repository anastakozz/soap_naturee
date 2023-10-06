import handleSorting from './handleSorting';
import { render, screen } from '@testing-library/react';

describe('handleSorting function', () => {
  function Fragment() {
    return (
      <>
        <div className='priceUp'>priceUp</div>
        <div className='priceDown'>priceDown</div>
        <div className='sortAbc'>sortAbc</div>
        <div className='sortZyx'>sortZyx</div>
      </>
    );
  }

  const mockChangeSortingParameters = jest.fn();

  it('should toggle class for priceUp when sortMethod is priceUp', () => {
    render(<Fragment />);
    const component = screen.getByText('priceUp');
    handleSorting('priceUp', mockChangeSortingParameters);
    expect(component).toHaveClass('bg-grayLColor/90');
  });

  it('should toggle class for priceDown when sortMethod is priceDown', () => {
    render(<Fragment />);
    const component = screen.getByText('priceDown');
    handleSorting('priceDown', mockChangeSortingParameters);
    expect(component).toHaveClass('bg-grayLColor/90');
  });

  it('should toggle class for sortAbc when sortMethod is sortAbc', () => {
    render(<Fragment />);
    const component = screen.getByText('sortAbc');
    handleSorting('sortAbc', mockChangeSortingParameters);
    expect(component).toHaveClass('bg-grayLColor/90');
  });

  it('should toggle class for sortZyx when sortMethod is sortZyx', () => {
    render(<Fragment />);
    const component = screen.getByText('sortZyx');
    handleSorting('sortZyx', mockChangeSortingParameters);
    expect(component).toHaveClass('bg-grayLColor/90');
  });
});
