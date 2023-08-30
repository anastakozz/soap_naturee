import SortByName from './sortByName';
import SortByPrice from './sortByPrice';

export default function SortingView() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <SortByName />
      <SortByPrice />
    </div>
  );
}
