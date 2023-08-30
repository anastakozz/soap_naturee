import { SelectCategory } from './selectCategory';
// import { SortingModule } from './sor ting/sortingModule';
import { FilterModule } from './filter/filterModule';
import { OurProductsCardsProps } from '../../../lib/interfaces';

export function Navigation({ changeContent }: OurProductsCardsProps) {
  return (
    <div className='bg-accentColor dark:bg-accentDarkColor text-primaryColor'>
      <div className='flex flex-wrap justify-between max-w-[1440px] py-sm mx-auto lg:px-big'>
        <SelectCategory changeContent={changeContent} />
        {/* <SortingModule /> */}
        <FilterModule />
      </div>
    </div>
  );
}
