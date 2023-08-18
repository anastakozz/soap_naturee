import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../Input'
import { emailValidation, nameValidation, numValidation, passwordValidation } from '../../../lib/utils/inputValidations'
import DatePicker from './dateInput'
import Dropdown from './dropDown'
import { InputColumn } from '../inputColumn'
import FormButton from '../formButton'
import { handleRegistration } from '../../../services/handleRegistration'
import ResultMessage from '../../ResultMessage'
import { useState } from 'react'
import { ResultProps } from '../../../lib/interfaces'
import EmptyButton from '../../buttons/emptyButton';
import {handleRegistration} from '../../../services/handleRegistration'

export const RegistrationForm = () => {
  const methods = useForm()
  const [submitResult, setSubmitResult] = useState<ResultProps>({
    isSuccess: false,
    message: 'ljlkjlj',
    isVisible: false
  })
  // methods.handleSubmit
  const onSubmit = async () => {
    const result = await handleRegistration()
    result.isVisible = true
    console.log(result)
    setSubmitResult(result)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete='off'
        className='bg-secondaryColor dark:bg-grayMColor'
      >
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Registration form:</h3>
          <div className={'md:w-form'}>
            <div className={'md:flex justify-between'}>
              <InputColumn {...nameValidation} label='First name:' placeholder='Type your first name' />
              <InputColumn {...nameValidation} label='Second name:' placeholder='Type your second name' />
            </div>
            <DatePicker control={methods.control} />
            <Input {...emailValidation} />
            <Input {...passwordValidation} />
            <h4 className={'text-h4 text-grayLColor dark:text-primaryColor font-bold my-sm text-center'}>
              Your address
            </h4>
            <div className={'md:flex mb-esm justify-between'}>
              <h4
                className={
                  'mb-min font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap mr-10 md:mb-0'
                }
              >
                Your country:
              </h4>
              <Dropdown control={methods.control} />
            </div>

            <Input {...nameValidation} label='City:' placeholder='Type your city' />
            <Input {...nameValidation} label='Street:' placeholder='Write your street' />
            <Input {...nameValidation} label='House:' placeholder='Type your house number' />
            <Input {...numValidation} label='Postal code' placeholder='Type your postal code' />
            <div className={'my-sm'}>
              <FormButton onClick={onSubmit}>CREATE AN ACCOUNT</FormButton>
            </div>
            <p className={'text-h4 font-semibold text-grayLColor dark:text-primaryColor'}>
              Do you already have an account?
            </p>
            <div className={'my-sm'}>
              <FormButton to={'/sign-in'}>SIGN IN</FormButton>
              <EmptyButton {...{children:'click', onClick: handleRegistration} }></EmptyButton>
            </div>
          </div>
          <ResultMessage {...submitResult}></ResultMessage>
        </div>
      </form>
    </FormProvider>
  )
}
