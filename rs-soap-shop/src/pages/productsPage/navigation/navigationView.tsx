import { SelectCategory } from './selectCategory/selectCategory';
import SortingView from './sorting/sortingView';
import FilterModule from './filter/filterView';
import { OurProductsCardsProps } from '../../../lib/interfaces';
import SearchView from './search/searchView';

export function NavigationView({ changeContent }: OurProductsCardsProps) {
  return (
    <div className='bg-accentColor dark:bg-accentDarkColor text-primaryColor'>
      <div className='flex flex-wrap justify-between items-center max-w-[1440px] py-4 px-4 mx-auto lg:px-big'>
        <SelectCategory changeContent={changeContent} />
        <SortingView />
        <FilterModule />
        <SearchView />
      </div>
    </div>
  );
}
