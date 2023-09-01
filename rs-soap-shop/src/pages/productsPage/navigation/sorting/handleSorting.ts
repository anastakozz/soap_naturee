export default function handleSorting(
  sortMethod: string,
  changeSortingParameters: (
    isSortPriceUp: boolean,
    isSortPriceDown: boolean,
    isSortABC: boolean,
    isSortZYX: boolean
  ) => void
): void {
  const priceUp: HTMLDivElement = document.querySelector('.priceUp');
  const priceDown: HTMLDivElement = document.querySelector('.priceDown');
  const sortAbc: HTMLDivElement = document.querySelector('.sortAbc');
  const sortZyx: HTMLDivElement = document.querySelector('.sortZyx');

  if (sortMethod === 'priceUp') {
    priceUp.classList.toggle('bg-grayLColor/90');
    priceDown.classList.remove('bg-grayLColor/90');
    sortAbc.classList.remove('bg-grayLColor/90');
    sortZyx.classList.remove('bg-grayLColor/90');

    const isSortPriceUpActive: boolean = priceUp.classList.contains('bg-grayLColor/90');
    changeSortingParameters(isSortPriceUpActive, false, false, false);
  } else if (sortMethod === 'priceDown') {
    priceUp.classList.remove('bg-grayLColor/90');
    priceDown.classList.toggle('bg-grayLColor/90');
    sortAbc.classList.remove('bg-grayLColor/90');
    sortZyx.classList.remove('bg-grayLColor/90');

    const isSortPriceDownActive: boolean = priceDown.classList.contains('bg-grayLColor/90');
    changeSortingParameters(false, isSortPriceDownActive, false, false);
  } else if (sortMethod === 'sortAbc') {
    priceUp.classList.remove('bg-grayLColor/90');
    priceDown.classList.remove('bg-grayLColor/90');
    sortAbc.classList.toggle('bg-grayLColor/90');
    sortZyx.classList.remove('bg-grayLColor/90');

    const isSortAbcActive: boolean = sortAbc.classList.contains('bg-grayLColor/90');
    changeSortingParameters(false, false, isSortAbcActive, false);
  } else if (sortMethod === 'sortZyx') {
    priceUp.classList.remove('bg-grayLColor/90');
    priceDown.classList.remove('bg-grayLColor/90');
    sortAbc.classList.remove('bg-grayLColor/90');
    sortZyx.classList.toggle('bg-grayLColor/90');

    const isSortZyxActive: boolean = sortZyx.classList.contains('bg-grayLColor/90');
    changeSortingParameters(false, false, false, isSortZyxActive);
  }
}
