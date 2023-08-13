import { FormProvider, useForm } from 'react-hook-form'
import { Input } from './Input'
import { emailValidation, nameValidation, numValidation, passwordValidation } from '../utils/inputValidations'
import DatePicker from './dateInput'
import Dropdown from './dropDown'
import React from 'react'

export const RegistrationForm = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()} noValidate autoComplete='off' className='container'>
        <h3>Registration form:</h3>
        <div className={'flex'}>
          <Input {...nameValidation} label='First name' placeholder='Type your first name' />
          <Input {...nameValidation} label='Second name' placeholder='Type your second name' />
        </div>
        <DatePicker />
        <Input {...emailValidation} />
        <Input {...passwordValidation} />
        <h3 className={'text-center'}>Your address</h3>
        <div className={'flex'}>
          <h3 className={'font-semibold text-h4 text-grayLColor whitespace-nowrap mr-10'}>Your country:</h3>
          <Dropdown />
        </div>

        <Input {...nameValidation} label='City:' placeholder='Type your city' />
        <Input {...nameValidation} label='Street:' placeholder='Write your street' />
        <Input {...nameValidation} label='House:' placeholder='Type your house number' />
        <Input {...numValidation} label='Postal code' placeholder='Type your postal code' />
        <button
          onClick={onSubmit}
          className='flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
        >
          CREATE AN ACCOUNT
        </button>
        <p>Do you already have an account?</p>
        <button
          onClick={onSubmit}
          className='flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
        >
          SIGN IN
        </button>
      </form>
    </FormProvider>
  )
}
