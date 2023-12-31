import Navigation from '../navigation/navigationLight';
import SocialMediaLinks from '../socialMediaLinks';
import { NavLink } from 'react-router-dom';
import ShopLogo from '../../icons/shopLogo';

function Footer() {
  return (
    <footer data-testid='footer' className='bg-secondaryColor dark:bg-grayLColor transition'>
      <div className='max-w-[1440px] mx-auto px-4 flex flex-col lg:px-big py-4'>
        <div className='flex flex-col justify-between items-center md:flex-row'>
          <div className='hidden md:block'>
            <NavLink
              to={'/'}
              className='text-basicColor dark:text-primaryColor drop-shadow-sm hover:text-accentColor dark:hover:text-accentColor active:scale-95 transition'
            >
              <ShopLogo></ShopLogo>
            </NavLink>
          </div>

          <div className='hidden md:block'>
            <Navigation />
          </div>

          <SocialMediaLinks />
        </div>
        <div className='flex items-center justify-center md:justify-end'>
          <p className='text-basicColor dark:text-primaryColor mr-sm'>2023 by SayYesToJS</p>
          <a href='https://rs.school/index.html' target='blanc'>
            <img
              src='/images/RSS-logo-light.png'
              alt='RSS logo'
              className='block dark:hidden w-[50px] md:w-[100px] hover:scale-110 transition'
            />
            <img
              src='/images/RSS-logo-dark.png'
              alt='RSS logo'
              className='hidden dark:block w-[50px] md:w-[100px] hover:scale-110 transition'
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
