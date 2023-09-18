import { NavLink } from 'react-router-dom';
import LoginAreaModal from '../../loginArea/loginAreaModal';

function NavigationModal({
  isOpen,
  isLoggedIn,
  onClose,
  onLogout
}: {
  isOpen: boolean;
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className='absolute w-full h-[100vh] top-[96px] z-10 left-[0px] bg-basicColor opacity-50'
      ></div>
      <div
        className={`flex-col justify-center items-center p-4 bg-accentColor absolute z-20 top-[96px] w-[320px] transition-all ${
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
        <LoginAreaModal onLogout={onLogout} onClose={onClose} isLoggedIn={isLoggedIn} />
      </div>
    </>
  );
}

export default NavigationModal;
