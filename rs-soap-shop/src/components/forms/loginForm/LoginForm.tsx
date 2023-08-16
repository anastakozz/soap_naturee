import { Input } from '../Input'
import { useForm, FormProvider } from 'react-hook-form'
import { emailValidation, passwordValidation } from '../../../utils/inputValidations'
import React from 'react'
import EmptyButton from '../../buttons/emptyButton';

export const LoginForm = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()} noValidate autoComplete='off' className='bg-secondaryColor dark:bg-grayMColor'>
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Sign In form:</h3>
          <div className={'md:w-form'}>
            <Input {...emailValidation} />
            <Input {...passwordValidation} />
          </div>
          <div className={'my-sm'}>
            <EmptyButton onClick={onSubmit}>SIGN IN</EmptyButton>
          </div>
          <p className={'text-h4 dark:text-primaryColor font-semibold text-grayLColor'}>Don&apos;t have an account yet?</p>
          <div className={'my-sm'}>
            <EmptyButton to={'/sign-up'}>CREATE AN ACCOUNT</EmptyButton>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
