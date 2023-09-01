import SortByName from './sortByName';
import SortByPrice from './sortByPrice';
import { apiUrl, projectKey } from '../../../../lib/constants';

export let sortingQueryString= '';

export function changeSortingParameters(
  isSortPriceUp: boolean,
  isSortPriceDown: boolean,
  isSortABC: boolean,
  isSortZYX: boolean
): string {
  if (isSortPriceUp) {
    sortingQueryString = `${apiUrl}/${projectKey}/product-projections/?sort=variants.price.centAmount%3Aasc`;
  } else if (isSortPriceDown) {
    sortingQueryString = `${apiUrl}/${projectKey}/product-projections/?sort=variants.price.centAmount%3Adesc`;
  } else if (isSortABC) {
    sortingQueryString = `${apiUrl}/${projectKey}/product-projections/?sort=name%3Aasc`;
  } else if (isSortZYX) {
    sortingQueryString = `${apiUrl}/${projectKey}/product-projections/?sort=name%3Adesc`;
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
