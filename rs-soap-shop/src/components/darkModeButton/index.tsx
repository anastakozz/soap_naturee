export function DarkModeButton({ onChange }: { onChange: () => void }) {
  return (
    <div onClick={onChange} className='change-mode-button cursor-pointer hover:scale-110 transition mr-4'>
      <svg className='block dark:hidden' width='24px' height='24px' viewBox='0 0 32 32' fill='none'>
        <path
          d='M1 15.5748C1 24.2472 8.02973 31.2774 16.7013 31.2774C23.3084 31.2774 28.9623 27.1961 31.28 21.417C29.4716 22.1439 27.4927 22.5536 25.4243 22.5536C16.7526 22.5536 9.72296 15.5233 9.72296 6.85092C9.72296 4.79206 10.1266 2.80167 10.8469 1C5.07491 3.32106 1 8.972 1 15.5748Z'
          stroke='black'
          strokeWidth='1.33'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      <svg className='change-mode-button hidden dark:block' width='24px' height='24px' viewBox='0 0 24 24' fill='none'>
        <path
          d='M3 12H5M5.00006 19L7.00006 17M12 19V21M17 17L19 19M5 5L7 7M19 12H21M16.9999 7L18.9999 5M12 3V5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}
