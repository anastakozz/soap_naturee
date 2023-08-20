import { emailValidation, passwordValidation } from '../../lib/utils/inputValidations'
import React, { useState } from 'react'
import ButtonForm from './buttonForm'
import { Input } from './inputs/Input'
import { validateEmail } from './validateFunctions/e-mail'
import { validatePassword } from './validateFunctions/password'
import { LoginData } from '../../lib/interfaces'

export const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateAllInputs(): LoginData {
    setIsSubmitted(true)
    const emailValidationResult: string | undefined = validateEmail(email)
    const passwordValidationResult: string | undefined = validatePassword(password)

    if (!emailValidationResult && !passwordValidationResult) {
      const loginData: LoginData = {
        email: email,
        password: password
      }
      return loginData
    }
  }

  return (
    <form className='bg-secondaryColor dark:bg-grayMColor'>
      <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
        <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Sign In form:</h3>
        <div className={'md:w-form'}>
          <Input {...emailValidation} isSubmitted={isSubmitted} onChange={(newValue: string) => setEmail(newValue)} />
          <Input
            {...passwordValidation}
            isSubmitted={isSubmitted}
            onChange={(newValue: string) => setPassword(newValue)}
          />
        </div>
        <div className={'my-sm'}>
          <ButtonForm onClick={validateAllInputs}>SIGN IN</ButtonForm>
        </div>
        <p className={'text-h4 dark:text-primaryColor font-semibold text-grayLColor'}>
          Don&apos;t have an account yet?
        </p>
        <div className={'my-sm'}>
          <ButtonForm to={'/sign-up'}>CREATE AN ACCOUNT</ButtonForm>
        </div>
      </div>
    </form>
  )
}
