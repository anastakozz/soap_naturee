import { SortABC } from '../../../../icons/sortABC';
import { SortZYX } from '../../../../icons/sortZYX';
import { iconClassesNormal } from '../../../../lib/constants';
import handleSorting from './handleSorting';

export default function SortByName() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <div className={`${iconClassesNormal} sortAbc`} onClick={() => handleSorting('sortAbc')}>
        <SortABC />
      </div>
      <div className={`${iconClassesNormal} sortZyx`} onClick={() => handleSorting('sortZyx')}>
        <SortZYX />
      </div>
    </div>
  );
}
