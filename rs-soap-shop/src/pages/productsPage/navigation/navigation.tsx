import { SelectCategory } from './selectCategory';
import { SortingModule } from './sorting/sortingModule';
import { FilterModule } from './filter/filterModule';
import { OurProductsCardsProps } from '../../../lib/interfaces';

export function Navigation({ changeContent }: OurProductsCardsProps) {
  return (
    <div className='bg-accentColor dark:bg-accentDarkColor text-primaryColor'>
      <div className='flex flex-wrap justify-between items-center max-w-[1440px] py-4 px-4 mx-auto lg:px-big'>
        <SelectCategory changeContent={changeContent} />
        <SortingModule />
        <FilterModule />
      </div>
    </div>
  );
}
