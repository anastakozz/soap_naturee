import { NavLink } from 'react-router-dom'

function LoginAreaModal({ isLoggedIn, onClose }: { isLoggedIn: boolean; onClose: () => void }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <NavLink
            onClick={onClose}
            className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
            to={'/profile'}
          >
            <div className='border-b border-solid border-primaryColor w-full text-2xl py-4 py-4'>My profile</div>
          </NavLink>

          <div
            onClick={onClose}
            className='text-primaryColor hover:text-grayLColor cursor-pointer transition border-b border-solid border-primaryColor w-full text-2xl py-4'
          >
            Log Out
          </div>
        </>
      ) : (
        <>
          <NavLink
            onClick={onClose}
            className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
            to={'/sign-in'}
          >
            <div className='border-b border-solid border-primaryColor w-full text-2xl py-4'>Sign in</div>
          </NavLink>
          <NavLink
            onClick={onClose}
            className='text-primaryColor hover:text-grayLColor cursor-pointer transition w-full'
            to={'/sign-up'}
          >
            <div className='border-b border-solid border-primaryColor w-full text-2xl py-4'>Sign up</div>
          </NavLink>
        </>
      )}
    </>
  )
}

export default LoginAreaModal
