// const isMenuOpen = true
function BurgerMenuButton({ isMenuOpen, onClick }: { isMenuOpen: boolean; onClick: () => void }) {
  return isMenuOpen ? (
    <>
      <div onClick={onClick}>
        <svg
          className='h-8 w-8 stroke-current text-grayLColor hover:text-accentColor dark:text-primaryColor dark:hover:text-accentColor transition cursor-pointer'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3A3A3A'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='18' y1='6' x2='6' y2='18' />
          <line x1='6' y1='6' x2='18' y2='18' />
        </svg>
      </div>
    </>
  ) : (
    <div onClick={onClick} className='HAMBURGER-ICON space-y-2 md:hidden group cursor-pointer'>
      <span className='block h-0.5 w-8 bg-grayLColor group-hover:bg-accentColor dark:bg-primaryColor transition'></span>
      <span className='block h-0.5 w-8 bg-grayLColor group-hover:bg-accentColor dark:bg-primaryColor transition'></span>
      <span className='block h-0.5 w-8 bg-grayLColor group-hover:bg-accentColor dark:bg-primaryColor transition'></span>
    </div>
  )
}

export default BurgerMenuButton
