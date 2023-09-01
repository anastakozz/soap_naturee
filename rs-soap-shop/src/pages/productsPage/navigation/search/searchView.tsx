import classNames from 'classnames';
export default function SearchView() {
  return (
    <input
      placeholder='Search...'
      className={classNames(
        'inline-flex justify-between',
        'px-2 py-1 h-[37px]',
        'text-sm font-medium text-gray-700',
        'bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentDarkColor dark:focus:ring-accentColor'
      )}
    ></input>
  );
}
