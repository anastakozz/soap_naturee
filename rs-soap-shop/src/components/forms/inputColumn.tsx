import cn from 'classnames'
import { InputProps } from '../../lib/interfaces'
import {ChangeEventHandler, useState} from 'react';
import {validateEmail} from './validateFunctions/e-mail';
import {validatePassword} from './validateFunctions/password';
import {validateName} from './validateFunctions/name';

export const InputColumn = ({ label, type, placeholder }: InputProps) => {

  const inputTailwind = 'p-5 font-medium rounded-md w-inputs md:w-inputName border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black';

  const [error, setError] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;
    if (type === 'email') {
      const validationError = validateEmail(inputValue);
      setError(validationError);
    } else if (type === 'password') {
      const validationError = validatePassword(inputValue);
      setError(validationError);
    } else if (type === 'text') {
      const validationError = validateName(inputValue);
      setError(validationError);
    }
  };

  return (

    <div className={'flex w-inputs gap-2 flex-col md:justify-between md: mb-esm'}>
      <div className='flex flex-col md:flex-row justify-between md:items-end'>
        <label className='font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'>
          {label}
        </label>

        <div className={'w-inputs md:hidden text-red-500'}>
          {error}
        </div>
      </div>

      <div className={'w-inputs'}>
        <div className={'hidden md:inline-block w-inputName text-red-500'}>
          {error}
        </div>

        <input
          type={type}
          className={cn(inputTailwind)}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </div>

    </div>
  )
}

