import { SortPriceUp } from '../../../../icons/sortPriceUp';
import { SortPriceDown } from '../../../../icons/sortPriceDown';
import { iconClassesNormal } from '../../../../lib/constants';

export function SortByPrice() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <div className={`${iconClassesNormal}`}>
        <SortPriceUp />
      </div>
      <div className={`${iconClassesNormal}`}>
        <SortPriceDown />
      </div>
    </div>
  );
}
