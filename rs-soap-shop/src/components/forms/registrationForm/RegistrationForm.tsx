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
import React from 'react'
import {InputColumn} from '../inputColumn';
import FormButton from '../formButton';
import {Input} from '../Input';

export const RegistrationForm = () => {
  const methods = useForm()

  function test() {
    console.log('clicked')
  }

  return (
    <FormProvider {...methods}>
      <form className='bg-secondaryColor dark:bg-grayMColor'>
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Registration form:</h3>
          <div className={'md:w-form'}>
            <div className={'md:flex justify-between'}>
              <InputColumn {...nameValidation} label='First name:' placeholder='Type your first name' />
              <InputColumn {...nameValidation} label='Second name:' placeholder='Type your second name' />
            </div>
            <Input {...dateValidation} />
            <Input {...emailValidation} />
            <Input {...passwordValidation} />
            <h4 className={'text-h4 text-grayLColor dark:text-primaryColor font-bold my-sm text-center'}>Your address</h4>
            <div className={'md:flex items-end mb-esm justify-between'}>
              <h4 className={'mb-min font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap mr-10 md:mb-0'}>Your country:</h4>
              <Dropdown control={methods.control} />
            </div>

            <Input {...cityValidation} />
            <Input {...streetValidation} />
            <Input {...streetValidation} label='House:' placeholder='Type your house number' />
            <Input {...postalCodeValidation} />
            <div className={'my-sm'}>
              <FormButton onClick={test}>CREATE AN ACCOUNT</FormButton>
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
