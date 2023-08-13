import { useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { DarkModeButton } from '../darkModeButton'
import LoginArea from '../loginArea'
import Navigation from '../navigation'
import CartIconDark from '../../icons/cartIconDark'
import CartIcon from '../../icons/cartIcon'

function Header() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleChangeMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  const isLoggedIn = false

  return (
    <header className='bg-primaryColor dark:bg-grayLColor transition'>
      <div className='container mx-auto flex flex-col justify-between items-center min-h-24 lg:px-big md:flex-row'>
        <img src='/images/logo-light.png' width='142' height='70px' alt='logo' className='block dark:hidden' />
        <img src='/images/logo-dark.png' width='142' height='70px' alt='logo' className='hidden dark:block' />

        <Navigation />

        <div className='flex items-center mb-4 md:mb-0'>
          <DarkModeButton onChange={handleChangeMode} />
          <NavLink
            className='text-basicColor mr-4 hover:scale-110 transition dark:text-primaryColor transition'
            to={'/cart'}
          >
            <CartIconDark />
            <CartIcon />
          </NavLink>
          <LoginArea isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  )
}

export default Header
