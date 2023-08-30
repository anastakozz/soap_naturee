import { Radiobuttons } from './radiobuttons';
import { NewCollection } from './newCollection';
import { PriceFilter } from './PriceFilter';
import FilterButton from './filterButton';

export function FilterModule() {
  return (
    <div
      className={'flex flex-col justify-between py-[10px] px-sm border rounded-lg border-solid border-black border-1'}
    >
      <div className={'text-h3'}>Filter settings</div>
      <div className={'flex gap-[20px] '}>
        <div className={'flex flex-col justify-between'}>
          <Radiobuttons />
          <NewCollection />
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
