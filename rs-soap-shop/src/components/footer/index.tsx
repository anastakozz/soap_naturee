import Navigation from '../navigation'
import SocialMediaLinks from '../socialMediaLinks'

function Footer() {
  return (
    <footer className='bg-secondaryColor dark:bg-grayLColor transition'>
      <div className='container mx-auto flex flex-col lg:px-big py-4'>
        <div className='flex flex-col justify-between items-center md:flex-row'>
          <div className='hidden md:block'>
            <img src='/images/logo-light.png' width='142' height='70px' alt='logo' className='block dark:hidden ' />
            <img src='/images/logo-dark.png' width='142' height='70px' alt='logo' className='hidden dark:block' />
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
  )
}

export default Footer
