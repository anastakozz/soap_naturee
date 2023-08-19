import { Input } from '../Input'
import { useForm, FormProvider } from 'react-hook-form'
import { emailValidation, passwordValidation } from '../../../lib/utils/inputValidations'
import React, { useEffect, useState } from 'react'
import FormButton from '../formButton'
import login from '../../../services/login.service'
import { useNavigate } from 'react-router-dom'
// import { type } from 'os'

type FormDataType = {
  email: string
  password: string
}

export const LoginForm = () => {
  const [error, setError] = useState(null)
  const methods = useForm()
  const navegate = useNavigate()

  const onSubmit = methods.handleSubmit((data: FormDataType) => {
    console.log(data)
    if (data && data?.email && data?.password) {
      login(data.email, data.password)
        .then(resp => {
          console.log(resp.data)
          const userData = resp.data
          localStorage.setItem('token', JSON.stringify(resp.data))
          navegate('/')
        })
        .catch(err => {
          console.error(err)
          if (err.response.data.error == 'invalid_customer_account_credentials') {
            setError(err.response.data.error_description)
          }
        })
    }
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete='off'
        className='bg-secondaryColor dark:bg-grayMColor'
      >
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Sign In form:</h3>
          {error && (
            <div className='bg-red-500/50 p-4 rounded-md mb-8 flex'>
              <img src='/images/attention-circle-svgrepo-com.svg' alt='' width='24px' className='mr-4' />
              <p>{error}</p>
            </div>
          )}
          <div className={'md:w-form'}>
            <Input onChange={() => setError(null)} {...emailValidation} />
            <Input {...passwordValidation} />
          </div>
          <div className={'my-sm'}>
            <FormButton onClick={onSubmit}>SIGN IN</FormButton>
          </div>
          <p className={'text-h4 dark:text-primaryColor font-semibold text-grayLColor'}>
            Don&apos;t have an account yet?
          </p>
          <div className={'my-sm'}>
            <FormButton to={'/sign-up'}>CREATE AN ACCOUNT</FormButton>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
