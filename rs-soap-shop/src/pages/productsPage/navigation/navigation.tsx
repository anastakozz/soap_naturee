import { SelectCategory } from './selectCategory/selectCategory';
import { OurProductsCardsProps } from '../../../lib/interfaces';
import SortingView from './sorting/sortingView';
import FilterView from './filter/filterView';

export function Navigation({ changeContent }: OurProductsCardsProps) {
  return (
    <div className='bg-graySColor dark:bg-greyLColor'>
      <div className='flex flex-wrap justify-between items-center max-w-[1440px] py-sm mx-auto lg:px-big'>
        <SelectCategory changeContent={changeContent} />
        <SortingView />
        <FilterView />
      </div>
    </div>
  );
}
