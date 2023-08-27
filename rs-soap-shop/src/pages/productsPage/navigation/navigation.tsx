import { Dropdown } from './dropDown';

export function Navigation() {
  return (
    <div className='bg-accentColor dark:bg-accentDarkColor'>
      <div className='flex items-center max-w-[1440px] mx-auto h-24 lg:px-big'>
        <Dropdown />
      </div>
    </div>
  );
}
