import React from 'react';
import { ButtonProps } from '../../../lib/interfaces';

export default function SmallButton({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className='cart-button transition text-secondaryColor font-bold bg-accentColor/80 hover:bg-accentDarkColor/80 dark:hover:bg-grayLColor h-[30px] w-full px-12'
    >
      {children}
    </button>
  );
}