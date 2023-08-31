import React from 'react';
import { ButtonProps } from '../../../lib/interfaces';

export default function AdditionalButton({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      data-testid='additional-button'
      onClick={onClick}
      className='rounded transition text-secondaryColor font-bold bg-accentColor/80 hover:bg-accentDarkColor/80 dark:hover:bg-grayLColor w-[70px] py-[5px] mb-2 md:mr-2  md:mb-0'
    >
      {children}
    </button>
  );
}
