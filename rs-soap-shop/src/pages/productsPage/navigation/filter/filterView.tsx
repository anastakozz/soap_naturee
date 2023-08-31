import { Radiobuttons } from './components/radiobuttons';
import { NewCollection } from './components/newCollection';
import { PriceFilter } from './components/PriceFilter';
import FilterButton from './components/filterButton';
import { useState } from 'react';
import FilterIcon from '../../../../icons/filterIcon';
import { iconClassesActive, iconClassesNormal } from '../../../../lib/constants';
import { OurProductsCardsProps } from '../../../../lib/interfaces';
import { getFiltered } from '../../../../services/product.service';

export default function FilterView({ changeContent }: OurProductsCardsProps) {
  const [isOn, setIsOn] = useState(false);
  const [isFiltered, setFilter] = useState(false);

  function toggleFilterMenu() {
    setIsOn(!isOn);
  }

  async function handleFilterClick() {
    toggleFilterMenu();
    setFilter(true);
    const filterOptions = generateFilterQuery();
    const response = await getFiltered(filterOptions);
    changeContent(response);
  }

  function generateFilterQuery(): string {

    const minPrice = +(document.querySelector('.min-price') as HTMLInputElement).value * 100;
    const maxPrice = +(document.querySelector('.max-price') as HTMLInputElement).value * 100;
    const productCheck = (document.querySelector('.product-check') as HTMLInputElement).checked;
    const setCheck = (document.querySelector('.set-check') as HTMLInputElement).checked;
    console.log(productCheck, setCheck)

    const priceQuery = `variants.price.centAmount:range (${minPrice} to ${maxPrice})`
    return priceQuery
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
              <NewCollection />
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
