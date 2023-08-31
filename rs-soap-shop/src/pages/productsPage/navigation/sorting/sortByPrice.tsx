import { SortPriceUp } from '../../../../icons/sortPriceUp';
import { SortPriceDown } from '../../../../icons/sortPriceDown';
import { iconClassesNormal } from '../../../../lib/constants';

export default function SortByPrice() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <div className={`${iconClassesNormal} hover:bg-grayLColor active:scale-95 transition`}>
        <SortPriceUp />
      </div>
      <div className={`${iconClassesNormal} hover:bg-grayLColor active:scale-95 transition`}>
        <SortPriceDown />
      </div>
    </div>
  );
}
