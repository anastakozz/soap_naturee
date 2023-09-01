import SortByName from './sortByName';
import SortByPrice from './sortByPrice';

export let sortingQueryString= '';

export function changeSortingParameters(
  isSortPriceUp: boolean,
  isSortPriceDown: boolean,
  isSortABC: boolean,
  isSortZYX: boolean
): string {
  if (isSortPriceUp) {
    sortingQueryString = 'sort=price%20asc';
  } else if (isSortPriceDown) {
    sortingQueryString = 'sort=price%20desc';
  } else if (isSortABC) {
    sortingQueryString = 'sort=name.en%20asc';
  } else if (isSortZYX) {
    sortingQueryString = 'sort=name.en%20desc';
  } else sortingQueryString = '';

  return sortingQueryString;
}

export default function SortingView() {
  return (
    <div className={'flex gap-[0.5rem]'}>
      <SortByName />
      <SortByPrice />
    </div>
  );
}
