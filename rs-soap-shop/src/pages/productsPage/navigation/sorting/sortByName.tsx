import { SortABC } from '../../../../icons/sortABC';
import { SortZYX } from '../../../../icons/sortZYX';
import { iconClassesNormal } from '../../../../lib/constants';

export default function SortByName() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <div className={`${iconClassesNormal} hover:bg-grayLColor active:scale-95 transition`}>
        <SortABC />
      </div>
      <div className={`${iconClassesNormal} hover:bg-grayLColor active:scale-95 transition`}>
        <SortZYX />
      </div>
    </div>
  );
}
