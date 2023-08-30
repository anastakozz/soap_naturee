import { Radiobuttons } from './radiobuttons';
import { NewCollection } from './newCollection';
import { PriceFilter } from './PriceFilter';
import FilterButton from './filterButton';
import { useState } from 'react';
import FilterIcon from '../../../../icons/filterIcon';
import { iconClassesActive, iconClassesNormal } from '../../../../lib/constants';

export function FilterModule() {
  const [isOn, setIsOn] = useState(false);
  const [isFiltered, setFilter] = useState(false);

  function toggleFilterMenu() {
    setIsOn(!isOn);
  }

  return (
    <div className='relative text-basicColor'>
      <div
        className='transition flex items-center gap-[0.5rem] text-primaryColor cursor-pointer hover:text-basicColor active:scale-95'
        onClick={toggleFilterMenu}
      >
        <div className={isFiltered ? `${iconClassesActive}` : `${iconClassesNormal}`}>
          <FilterIcon />
        </div>

        <div className='hidden md:block'>Filter</div>
      </div>
      <div className={isOn ? 'visible' : 'invisible'}>
        <div
          className={
            'text-xs drop-shadow-lg bg-additionalColor absolute z-40 right-0 top-10 flex flex-col justify-between py-[10px] px-sm border rounded-normal '
          }
        >
          <div className={'text-h5 my-4'}>Filter settings</div>
          <div className={'flex gap-[1rem] flex-wrap md:flex-nowrap'}>
            <div className={'flex flex-col'}>
              <Radiobuttons />
              <NewCollection />
            </div>
            <PriceFilter />
            <div className={'flex flex-col justify-between gap-[1rem]'}>
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
