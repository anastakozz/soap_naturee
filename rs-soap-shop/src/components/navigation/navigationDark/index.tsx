import { NavLink } from 'react-router-dom';

function NavigationDark() {
  return (
    <nav className='flex mb-4 md:mb-0'>
      <NavLink
        className='text-basicColor md:mr-md mr-4 hover:text-accentDarkColor cursor-pointer dark:text-primaryColor dark:hover:text-accentColor transition'
        to={'/'}
      >
        Home
      </NavLink>
      <NavLink
        className='text-basicColor md:mr-md mr-4 hover:text-accentDarkColor cursor-pointer dark:text-primaryColor dark:hover:text-accentColor transition'
        to={'/our-products'}
      >
        Our products
      </NavLink>
      <NavLink
        className='text-basicColor hover:text-accentDarkColor cursor-pointer dark:text-primaryColor dark:hover:text-accentColor transition'
        to={'/about-us'}
      >
        About us
      </NavLink>
    </nav>
  );
}

export default NavigationDark;
