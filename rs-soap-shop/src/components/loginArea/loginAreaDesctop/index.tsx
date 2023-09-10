import { NavLink, useNavigate } from 'react-router-dom';
import ProfileIcon from '../../../icons/profileIcon';
import ProfileIconDark from '../../../icons/profileIconDark';
import LogoutIcon from '../../../icons/logoutIcon';
import LogoutIconDark from '../../../icons/logoutIconDark';

function LoginArea({ isLoggedIn }: { isLoggedIn: boolean }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };
  return (
    <>
      {isLoggedIn ? (
        <div className='flex'>
          <div className='mr-4'>
            <NavLink to={'/profile'}>
              <ProfileIcon />
              <ProfileIconDark />
            </NavLink>
          </div>

          <div onClick={handleLogout} className='cursor-pointer'>
            <LogoutIcon />
            <LogoutIconDark />
          </div>
        </div>
      ) : (
        <div className='flex flex-col'>
          <NavLink
            className='text-basicColor hover:text-accentColor cursor-pointer dark:text-primaryColor dark:hover:text-accentColor transition'
            to={'/sign-in'}
          >
            Sign in
          </NavLink>
          <NavLink
            className='text-basicColor hover:text-accentColor cursor-pointer dark:text-primaryColor dark:hover:text-accentColor transition'
            to={'/sign-up'}
          >
            Sign up
          </NavLink>
        </div>
      )}
    </>
  );
}

export default LoginArea;
