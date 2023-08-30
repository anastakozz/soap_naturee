import { SortPriceUp } from '../../../../icons/sortPriceUp';
import { SortPriceDown } from '../../../../icons/sortPriceDown';

export function SortByPrice() {
  return (
    <div className={'flex justify-center'}>
      <div className={'border border-solid border-r-0 rounded-bl border-black p-2'}>
        <SortPriceUp />
      </div>
      <div className={'border border-solid rounded-br border-black p-2'}>
        <SortPriceDown />
      </div>
    </div>
  );
}
