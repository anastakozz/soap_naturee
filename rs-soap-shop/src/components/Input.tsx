import cn from 'classnames'
import { findInputError } from '../utils/findInputError'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import { InputProps, InputErrorProps, InputErrorObject } from './interfaces'
import { isFormInvalid } from '../utils/isFormInvalid'

export const Input = ({ name, label, type, id, placeholder, validation, multiline, className }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputErrors = findInputError(errors, name) as InputErrorObject
  const isInvalid = isFormInvalid(inputErrors)

  const inputTailwind = 'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'

  return (
    <div className={cn('flex flex-col w-full gap-2', className)}>
      <div className='flex justify-between'>
        <label htmlFor={id} className='font-semibold capitalize'>
          {label}
        </label>
        <AnimatePresence mode='wait' initial={false}>
          {isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          className={cn(inputTailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={cn(inputTailwind)}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
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
