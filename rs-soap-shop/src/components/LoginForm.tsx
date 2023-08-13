import { Input } from './Input'
import { useForm, FormProvider } from 'react-hook-form'
import { emailValidation, passwordValidation } from '../utils/inputValidations'
import React from 'react'

export const LoginForm = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()} noValidate autoComplete='off' className='container'>
        <h3>Sign In form:</h3>
        <div>
          <Input {...emailValidation} />
          <Input {...passwordValidation} />
        </div>
        <div className='mt-5'>
          <button
            onClick={onSubmit}
            className='flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
          >
            Submit Form
          </button>
        </div>
        <p>Dont have an account yet?</p>
        <button
          onClick={onSubmit}
          className='flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
        >
          CREATE AN ACCOUNT
        </button>
      </form>
    </FormProvider>
  )
}
