import React, {ChangeEventHandler, useState} from 'react';
import cn from 'classnames';
import {ShowPassword} from '../../icons/showPassword';
import {HidePassword} from '../../icons/hidePassword';
import {validateEmail} from './validateFunctions/e-mail';
import {InputProps} from '../../lib/interfaces';
import {validatePassword} from './validateFunctions/password';
import {validateDate} from './validateFunctions/date';
import {validateStreet} from './validateFunctions/street';
import {validateCity} from './validateFunctions/city';
import {validatePostalCode} from './validateFunctions/postalCode';

export const Input = ({label, type, placeholder }: InputProps) => {

  const inputTailwind = 'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black';

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [error, setError] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;
    if (type === 'mail') {
      const validationError = validateEmail(inputValue);
      setError(validationError);
    } else if (type === 'password') {
      const validationError = validatePassword(inputValue);
      setError(validationError);
    } else if (type === 'date') {
      const validationError = validateDate(inputValue);
      setError(validationError);
    } else if (type === 'street') {
      const validationError = validateStreet(inputValue);
      setError(validationError);
    } else if (type === 'city') {
      const validationError = validateCity(inputValue);
      setError(validationError);
    } else if (type === 'postalCode') {
      const validationError = validatePostalCode(inputValue);
      setError(validationError);
    }
  };

  return (

    <div className={'flex flex-col md:items-end w-full gap-2 md:flex-row md:justify-between md: mb-esm'}>
      <div className='flex flex-col md:flex-row'>
        <label className='font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'>
          {label}
        </label>

        <div className={'w-inputs md:hidden text-red-500'}>
          {error}
        </div>
      </div>

      <div className={'w-inputs'}>
        <div className={'hidden md:inline-block text-red-500'}>
          {error}
        </div>
        <div className='relative'>
          <input
            type={isPasswordVisible ? 'text' : type}
            className={cn(inputTailwind)}
            placeholder={placeholder}
            onChange={handleInputChange}
          />
          {type === 'password' && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-4 top-7 focus:outline-none'
            >
              {isPasswordVisible ? <HidePassword /> : <ShowPassword />}
            </button>
          )}
        </div>

      </div>

    </div>
  )
}
