import { NavLink } from 'react-router-dom'
import LoginAreaModal from '../../loginArea/loginAreaModal'

function NavigationModal({
  isOpen,
  isLoggedIn,
  onClose
}: {
  isOpen: boolean
  isLoggedIn: boolean
  onClose: () => void
}) {
  return (
    <div
      className={`flex-col justify-center items-center p-4 bg-accentColor absolute z-10 top-[96px] w-[320px] transition-all ${
        !isOpen && 'right-[-100%] hidden'
      } ${isOpen && 'right-0 flex'}`}
    >
      <NavLink
        onClick={onClose}
        className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
        to={'/'}
      >
        <div className='border-b border-solid border-primaryColor w-full text-2xl py-4'>Home</div>
      </NavLink>
      <NavLink
        onClick={onClose}
        className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
        to={'/our-products'}
      >
        <div className='border-b border-solid border-primaryColor w-full text-2xl py-4'>Our products</div>
      </NavLink>
      <NavLink
        onClick={onClose}
        className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
        to={'/about-us'}
      >
        <div className='border-b border-solid border-primaryColor w-full text-2xl py-4'>About us</div>
      </NavLink>
      <NavLink
        onClick={onClose}
        className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
        to={'/cart'}
      >
        <div className='border-b border-solid border-primaryColor w-full text-2xl py-4'>My cart</div>
      </NavLink>
      <LoginAreaModal onClose={onClose} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default NavigationModal
