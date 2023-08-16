import { ButtonProps } from '../../../lib/interfaces'

export default function EmptyButton({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className='transition text-accentColor dark:text-secondaryColor border-2 border-accentColor dark:border-secondaryColor hover:text-secondaryColor dark:hover:text-grayLColor font-bold bg-none hover:bg-accentColor dark:hover:bg-secondaryColor rounded-normal h-[74px] px-12 active:scale-95'
    >
      {children}
    </button>
  )
}
