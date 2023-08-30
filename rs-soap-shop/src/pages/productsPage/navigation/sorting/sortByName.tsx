import { SortABC } from '../../../../icons/sortABC';
import { SortZYX } from '../../../../icons/sortZYX';

export function SortByName() {
  return (
    <div className={'flex justify-center'}>
      <div className={'border border-solid border-r-0 border-b-0 rounded-tl border-black p-2'}>
        <SortABC />
      </div>
      <div className={'border border-solid rounded-tr border-b-0 border-black p-2'}>
        <SortZYX />
      </div>
    </div>
  );
}
