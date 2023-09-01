import { Radiobuttons } from './components/radiobuttons';
import { PriceFilter } from './components/PriceFilter';
import FilterButton from './components/filterButton';
import { useState } from 'react';
import FilterIcon from '../../../../icons/filterIcon';
import { iconClassesActive, iconClassesNormal } from '../../../../lib/constants';
import { OurProductsCardsProps } from '../../../../lib/interfaces';

export default function FilterView({ changeQuery }: OurProductsCardsProps) {
  const [isOn, setIsOn] = useState(false);
  const [isFiltered, setFilter] = useState(false);
  const minPriceInput = document.querySelector('.min-price') as HTMLInputElement;
  const maxPriceInput = document.querySelector('.max-price') as HTMLInputElement;
  const productCheck = document.querySelector('.product-check') as HTMLInputElement;
  const setCheck = document.querySelector('.set-check') as HTMLInputElement;

  function toggleFilterMenu() {
    setIsOn(!isOn);
  }

  function handleFilterClick() {
    toggleFilterMenu();
    setFilter(true);
    const filterOptions = generateFilterQuery(true);
    console.log(filterOptions);
    changeQuery(filterOptions);
  }

  function handleResetClick() {
    toggleFilterMenu();
    productCheck.checked = false;
    setCheck.checked = false;
    minPriceInput.value = '0';
    maxPriceInput.value = '300';
    setFilter(false);
    changeQuery('');
  }

  function generateFilterQuery(filter: boolean): string {
    const minPrice = +minPriceInput.value * 100;
    const maxPrice = +maxPriceInput.value * 100;
    const isProductChecked = productCheck.checked;
    const isSetChecked = setCheck.checked;

    if (filter) {
      let searchQuery = `filter=variants.price.centAmount:range (${minPrice} to ${maxPrice})`;
      if (isProductChecked) {
        searchQuery += '&filter=searchKeywords.en.text:"single"';
      }

      if (isSetChecked) {
        searchQuery += '&filter=searchKeywords.en.text:"set"';
      }

      return searchQuery;
    }
    return '';
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
            ' text-xs drop-shadow-lg bg-additionalColor absolute z-40 right-0 top-11 flex flex-col justify-between py-[10px] px-sm border rounded-normal '
          }
        >
          <div className={'text-h5 my-4'}>Filter settings</div>
          <div className={'flex gap-[1rem] flex-wrap md:flex-nowrap'}>
            <div className={'flex flex-col'}>
              <Radiobuttons />
            </div>
            <PriceFilter />
            <div className={'flex flex-col justify-between gap-[1rem]'}>
              <FilterButton
                onClick={() => {
                  handleFilterClick();
                }}
              >
                Filter
              </FilterButton>
              <FilterButton
                onClick={() => {
                  handleResetClick();
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
