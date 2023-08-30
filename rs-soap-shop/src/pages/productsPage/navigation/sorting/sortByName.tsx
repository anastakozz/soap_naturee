import { SortABC } from '../../../../icons/sortABC';
import { SortZYX } from '../../../../icons/sortZYX';
import { iconClassesNormal } from '../../../../lib/constants';

export function SortByName() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <div className={`${iconClassesNormal}`}>
        <SortABC />
      </div>
      <div className={`${iconClassesNormal}`}>
        <SortZYX />
      </div>
    </div>
  );
}
