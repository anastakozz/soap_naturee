import { SortByName } from './sortByName';
import { SortByPrice } from './sortByPrice';

export function SortingModule() {
  return (
    <div className={'w-big h-[100px] flex flex-col justify-center'}>
      <SortByName />
      <SortByPrice />
    </div>
  );
}
