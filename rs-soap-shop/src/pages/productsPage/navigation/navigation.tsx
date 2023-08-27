import { Dropdown } from './dropDown';
import { PriceFilter } from './PriceRangeSlider';
import FilterButton from './FilterButton';
import { SortByName } from './SortByName';
import { SortByPrice } from './sortByPrice';

export function Navigation() {
  return (
    <div className='bg-graySColor dark:bg-greyLColor'>
      <div className='flex flex-wrap justify-between items-center max-w-[1440px] py-sm mx-auto lg:px-big'>
        <Dropdown />
        <div className={'w-big h-[100px] flex flex-col justify-center'}>
          <SortByName />
          <SortByPrice />
        </div>
        <PriceFilter />
        <div className={'h-[100px] flex flex-col justify-between'}>
          <FilterButton onClick={() => console.log('Send request')}>Filter</FilterButton>
          <FilterButton onClick={() => console.log('Reset')}>Reset</FilterButton>
        </div>
      </div>
    </div>
  );
}
