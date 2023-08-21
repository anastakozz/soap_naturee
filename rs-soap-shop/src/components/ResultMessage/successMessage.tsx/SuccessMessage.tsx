import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function SuccessMessage() {
  const navigate = useNavigate()

  const handleKeyPress = () => {
    navigate('/')
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)
    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  return (
    <div
      data-testid='reg-success-message'
      onClick={() => {
        navigate('/')
      }}
    >
      <div className='w-full h-full bg-grayLColor opacity-30 fixed z-10 top-0 left-0'></div>
      <div className='z-20 bg-secondaryColor dark:bg-grayLColor dark:text-secondaryColor fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-normal p-8 md:px-sm md:py-big border-accentColor dark:border-secondaryColor border-8 border-double'>
        <p className='text-h4'>Yahoooo!</p>
        <p>Your account has been succefully created!</p>
      </div>
    </div>
  )
}
