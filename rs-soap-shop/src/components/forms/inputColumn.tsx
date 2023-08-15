import cn from 'classnames'
import { findInputError } from '../../utils/findInputError'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import { InputProps, InputErrorProps, InputErrorObject } from '../../lib/interfaces'
import { isFormInvalid } from '../../utils/isFormInvalid'

export const InputColumn = ({ name, label, type, id, placeholder, validation, className }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputErrors = findInputError(errors, name) as InputErrorObject
  const isInvalid = isFormInvalid(inputErrors)

  const inputTailwind = 'p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 md:w-inputName'

  return (

    <div className={cn('flex w-inputs gap-2 flex-col md:justify-between md: mb-esm', className)}>
      <div className='flex justify-between items-end'>
        <label htmlFor={id} className='font-semibold text-h4 text-grayLColor whitespace-nowrap'>
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

        <input
          id={id}
          type={type}
          className={cn(inputTailwind)}
          placeholder={placeholder}
          {...register(name, validation)}
        />
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
