import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { DarkModeButton } from '../darkModeButton'
import LoginArea from '../loginArea/loginAreaDesctop'
import Navigation from '../navigation/navigationLight'
import CartIconDark from '../../icons/cartIconDark'
import CartIcon from '../../icons/cartIcon'
import BurgerMenuButton from '../burgerMenuButton'
import NavigationModal from '../navigation/navigationModal'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', changeWidth)
  }, [])

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

  const isLoggedIn = !!localStorage.getItem('token')

  return (
    <header className='bg-primaryColor dark:bg-grayLColor transition relative'>
      <div className='max-w-[1440px] mx-auto px-4 flex justify-between items-center h-24 lg:px-big'>
        <img src='/images/logo-light.png' width='142' height='70px' alt='logo' className='block dark:hidden' />
        <img src='/images/logo-dark.png' width='142' height='70px' alt='logo' className='hidden dark:block' />

        <Navigation />
        <NavigationModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isLoggedIn={isLoggedIn} />
        <div className='flex items-center'>
          <DarkModeButton onChange={handleChangeMode} />
          <div className='flex items-center hidden md:flex'>
            <NavLink
              className='text-basicColor mr-4 hover:scale-110 transition dark:text-primaryColor transition'
              to={'/cart'}
            >
              <CartIconDark />
              <CartIcon />
            </NavLink>
            <LoginArea isLoggedIn={isLoggedIn} />
          </div>
          <BurgerMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  )
}

export default Header
