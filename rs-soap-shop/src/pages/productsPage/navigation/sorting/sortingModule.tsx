import { SortByName } from './sortByName';
import { SortByPrice } from './sortByPrice';

export function SortingModule() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <SortByName />
      <SortByPrice />
    </div>
  );
}
