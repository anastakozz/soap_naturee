import { SortPriceUp } from '../../../../icons/sortPriceUp';
import { SortPriceDown } from '../../../../icons/sortPriceDown';
import { iconClassesNormal } from '../../../../lib/constants';
import handleSorting from './handleSorting';

export default function SortByPrice() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <div className={`${iconClassesNormal} priceUp`} onClick={() => handleSorting('priceUp')}>
        <SortPriceUp />
      </div>
      <div className={`${iconClassesNormal} priceDown`} onClick={() => handleSorting('priceDown')}>
        <SortPriceDown />
      </div>
    </div>
  );
}
