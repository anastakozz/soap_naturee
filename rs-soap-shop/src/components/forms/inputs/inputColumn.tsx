import cn from 'classnames';
import { InputProps } from '../../../lib/interfaces';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { validateEmail } from '../validateFunctions/e-mail';
import { validatePassword } from '../validateFunctions/password';
import { validateName } from '../validateFunctions/name';
import { validateDate } from '../validateFunctions/date';
import { validateStreet } from '../validateFunctions/street';
import { validateCity } from '../validateFunctions/city';
import { validatePostalCode } from '../validateFunctions/postalCode';

export const InputColumn = ({ label, type, placeholder, isSubmitted, onChange }: InputProps) => {
  const inputTailwind =
    'p-5 font-medium rounded-md w-inputs md:w-inputName border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black';

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function determineValidationError(type: string, value: string): string {
    switch (type) {
      case 'mail':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      case 'date':
        return validateDate(value);
      case 'street':
        return validateStreet(value);
      case 'city':
        return validateCity(value);
      case 'postalCode':
        return validatePostalCode(value);
      case 'text':
        return validateName(value);
      default:
        return '';
    }
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    const inputValue: string = event.target.value;
    setValue(inputValue);
    onChange(inputValue);
    if (type === 'email') {
      const validationError: string = validateEmail(inputValue);
      setError(validationError);
    } else if (type === 'password') {
      const validationError: string = validatePassword(inputValue);
      setError(validationError);
    } else if (type === 'text') {
      const validationError: string = validateName(inputValue);
      setError(validationError);
    }
  };

  useEffect((): void => {
    if (isSubmitted) {
      const validationError: string = determineValidationError(type, value);
      setError(validationError);
    }
  }, [isSubmitted, type, value]);

  return (
    <div className={'flex w-inputs gap-2 flex-col md:justify-between md: mb-esm'}>
      <div className='flex flex-col md:flex-row justify-between md:items-end'>
        <label className='font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'>
          {label}
        </label>

        <div className={'w-inputs md:hidden text-errorColor'}>{error}</div>
      </div>

      <div className={'w-inputs'}>
        <div className={'hidden md:inline-block w-inputName text-errorColor'}>{error}</div>

        <input type={type} className={cn(inputTailwind)} placeholder={placeholder} onChange={handleInputChange} />
      </div>
    </div>
  );
};
