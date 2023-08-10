import { Input } from './components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { GrMail } from 'react-icons/gr'
import {
  nameValidation,
  emailValidation,
  numValidation,
  passwordValidation,
  descValidation
} from './utils/inputValidations'
import DatePicker from './components/dateInput'
import React from 'react'

export const Form = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()} noValidate autoComplete='off' className='container'>
        <div className='grid gap-5 md:grid-cols-2'>
          <Input multiline={false} className={''} {...nameValidation} />
          <Input multiline={false} className={''} {...emailValidation} />
          <Input multiline={false} className={''} {...numValidation} />
          <Input multiline={false} className={''} {...passwordValidation} />
          <Input type={''} {...descValidation} className='md:col-span-2' />
          <div>
            <h1>My App</h1>
            <DatePicker />
          </div>
        </div>
        <div className='mt-5'>
          <button
            onClick={onSubmit}
            className='flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
