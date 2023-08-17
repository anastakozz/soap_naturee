import { FormProvider, useForm } from 'react-hook-form'
import {
  cityValidation,
  dateValidation,
  emailValidation,
  nameValidation,
  passwordValidation,
  postalCodeValidation,
  streetValidation
} from '../../../lib/utils/inputValidations'
import Dropdown from './dropDown'
import React, {useState} from 'react'
import {InputColumn} from '../inputColumn';
import FormButton from '../formButton';
import {Input} from '../Input';

export const RegistrationForm = () => {
  const methods = useForm()

  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateAllInputs() {
    setIsSubmitted(true);
  }

  return (
    <FormProvider {...methods}>
      <form className='bg-secondaryColor dark:bg-grayMColor'>
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Registration form:</h3>
          <div className={'md:w-form'}>
            <div className={'md:flex justify-between'}>
              <InputColumn {...nameValidation} label='First name:' placeholder='Type your first name' isSubmitted={isSubmitted} />
              <InputColumn {...nameValidation} label='Second name:' placeholder='Type your second name' isSubmitted={isSubmitted} />
            </div>
            <Input {...dateValidation} isSubmitted={isSubmitted} />
            <Input {...emailValidation} isSubmitted={isSubmitted} />
            <Input {...passwordValidation} isSubmitted={isSubmitted} />
            <h4 className={'text-h4 text-grayLColor dark:text-primaryColor font-bold my-sm text-center'}>Your address</h4>
            <div className={'md:flex items-end mb-esm justify-between'}>
              <h4 className={'mb-min font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap mr-10 md:mb-0'}>Your country:</h4>
              <Dropdown control={methods.control} />
            </div>

            <Input {...cityValidation} isSubmitted={isSubmitted} />
            <Input {...streetValidation} isSubmitted={isSubmitted} />
            <Input {...streetValidation} label='House:' placeholder='Type your house number' isSubmitted={isSubmitted} />
            <Input {...postalCodeValidation} isSubmitted={isSubmitted} />
            <div className={'my-sm'}>
              <FormButton onClick={validateAllInputs}>CREATE AN ACCOUNT</FormButton>
            </div>
            <p className={'text-h4 font-semibold text-grayLColor dark:text-primaryColor'}>Do you already have an account?</p>
            <div className={'my-sm'}>
              <FormButton to={'/sign-in'}>SIGN IN</FormButton>
            </div>
          </div>
          </div>
      </form>
    </FormProvider>
  )
}
