import { Radiobuttons } from './radiobuttons';
import { NewCollection } from './newCollection';
import { PriceFilter } from './PriceFilter';
import FilterButton from './filterButton';
import { useState } from 'react';

export function FilterModule() {
  const [isOn, setIsOn] = useState(false);
  const [isFiltered, setFilter] = useState(false);

  function toggleFilterMenu() {
    setIsOn(!isOn);
  }

  return (
    <div className='relative text-basicColor '>
      <div className='text-primaryColor cursor-pointer hover:underline active:scale-95' onClick={toggleFilterMenu}>
        {isFiltered ? <div className='underline'>Filtered</div> : <div>Filter</div>}
      </div>
      <div className={isOn ? 'visible' : 'invisible'}>
        <div
          className={
            'drop-shadow-lg bg-secondaryColor absolute z-40 right-0 top-10 flex flex-col justify-between py-[10px] px-sm border rounded-normal border-solid border-black border-1'
          }
        >
          <div className={'text-h4'}>Filter settings</div>
          <div className={'flex gap-[20px] '}>
            <div className={'flex flex-col justify-between'}>
              <Radiobuttons />
              <NewCollection />
            </div>
            <PriceFilter />
            <div className={'h-[100px] flex flex-col justify-between'}>
              <FilterButton
                onClick={() => {
                  setFilter(true);
                  setIsOn(false);
                  console.log('Send request');
                }}
              >
                Filter
              </FilterButton>
              <FilterButton
                onClick={() => {
                  setFilter(false);
                  setIsOn(false);
                  console.log('Reset');
                }}
              >
                Reset
              </FilterButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
