import React, { useState } from 'react'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { InputErrorObject, InputErrorProps, InputProps } from '../../lib/interfaces'
import { findInputError } from '../../lib/utils/findInputError'
import { isFormInvalid } from '../../lib/utils/isFormInvalid'
import { useFormContext } from 'react-hook-form'
import { ShowPassword } from '../../icons/showPassword'
import { HidePassword } from '../../icons/hidePassword'
import { MdError } from 'react-icons/md'

export const Input = ({ name, label, type, id, placeholder, validation, className, onChange }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputErrors = findInputError(errors, name) as InputErrorObject
  const isInvalid = isFormInvalid(inputErrors)

  const inputTailwind =
    'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black'

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className={cn('flex flex-col w-full gap-2 md:flex-row md:justify-between md: mb-esm', className)}>
      <div className='flex justify-between items-end'>
        <label htmlFor={id} className='font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'>
          {label}
        </label>

        <div className={'md:hidden'}>
          <AnimatePresence mode='wait' initial={false}>
            {isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
          </AnimatePresence>
        </div>
      </div>

      <div className={'w-inputs'}>
        <div className={'hidden md:block w-big'}>
          <AnimatePresence mode='wait' initial={false}>
            {isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
          </AnimatePresence>
        </div>
        <div className='relative'>
          <input
            id={id}
            type={isPasswordVisible ? 'text' : type}
            className={cn(inputTailwind)}
            placeholder={placeholder}
            {...register(name, { ...validation, onChange: onChange })}
          />
          {type === 'password' && (
            <button onClick={togglePasswordVisibility} className='absolute right-4 top-7 focus:outline-none'>
              {isPasswordVisible ? <HidePassword /> : <ShowPassword />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const InputError = ({ message }: InputErrorProps) => {
  return (
    <motion.p
      className='flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md'
      {...framerError}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framerError = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}
