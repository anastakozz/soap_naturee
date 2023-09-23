import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import classNames from 'classnames';

export default function SuccessMessage({
  text = '',
  disableRedirect = true
}: {
  text?: string;
  disableRedirect?: boolean;
}) {
  const navigate = useNavigate();

  const handleKeyPress = () => {
    if (!disableRedirect) {
      navigate('/');
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress);
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div data-testid='reg-success-message' onClick={handleKeyPress}>
      <div className='w-full h-full bg-grayLColor opacity-30 fixed z-10 top-0 left-0'></div>
      <div
        className={classNames(
          'z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'rounded-normal p-8 md:px-sm md:py-big',
          'bg-secondaryColor dark:bg-grayLColor dark:text-secondaryColor',
          'border-accentColor dark:border-secondaryColor border-8 border-double'
        )}
      >
        <p className='text-h4'>Yahoooo!</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
