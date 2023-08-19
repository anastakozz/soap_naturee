import { ButtonProps } from '../../../lib/interfaces'

export default function HeavyButton({ children }: ButtonProps): JSX.Element {
  return (
    <button
      className='transition text-secondaryColor font-bold bg-accentColor hover:bg-accentDarkColor dark:hover:bg-grayLColor rounded-normal h-[74px] px-12 active:scale-95'
    >
      {children}
    </button>
  )
}
