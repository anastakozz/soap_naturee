import { FormProvider, useForm } from 'react-hook-form'
import {
  cityValidation,
  dateValidation,
  emailValidation,
  nameValidation,
  passwordValidation,
  postalCodeValidation,
  streetValidation
} from '../../lib/utils/inputValidations'
import React, { useState } from 'react'
import { InputColumn } from './inputs/inputColumn'
import ButtonForm from './buttonForm'
import { Input } from './inputs/Input'
import { validateEmail } from './validateFunctions/e-mail'
import { validatePassword } from './validateFunctions/password'
import { validateDate } from './validateFunctions/date'
import { validateCity } from './validateFunctions/city'
import { validateStreet } from './validateFunctions/street'
import { validatePostalCode } from './validateFunctions/postalCode'
import { validateName } from './validateFunctions/name'
import { RegistrationData, ResultProps } from '../../lib/interfaces'
import { handleRegistration } from '../../services/handleRegistration'
import ResultMessage from '../ResultMessage'

export const RegistrationForm = () => {
  const methods = useForm()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [date, setDate] = useState('')

  const [city, setCity] = useState('')
  const [shippingCity, setShippingCity] = useState('')

  const [street, setStreet] = useState('')
  const [shippingStreet, setShippingStreet] = useState('')

  const [house, setHouse] = useState('')
  const [shippingHouse, setShippingHouse] = useState('')

  const [postalCode, setPostalCode] = useState('')
  const [shippingPostalCode, setShippingPostalCode] = useState('')

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')

  const [selectedCountry, setSelectedCountry] = useState('')
  const [shippingSelectedCountry, setShippingSelectedCountry] = useState('')

  const [shouldCopy, setShouldCopy] = useState(false)

  const [selectedCountryError, setSelectedCountryError] = useState(false)
  const [shippingCountryError, setShippingCountryError] = useState(false)

  const [isShippingAddressActive, setIsShippingAddressActive] = useState(false)
  const [isDefaultBillingAddress, setIsDefaultBillingAddress] = useState(false)
  const [isDefaultShippingAddress, setIsDefaultShippingAddress] = useState(false)

  const handleCopyClick = (): void => {
    setShouldCopy(!shouldCopy)
    setIsShippingAddressActive(!isShippingAddressActive)
    if (shouldCopy) {
      setShippingSelectedCountry('')
      setShippingCity('')
      setShippingStreet('')
      setShippingHouse('')
      setShippingPostalCode('')
    } else {
      setShippingSelectedCountry(selectedCountry)
      setShippingCity(city)
      setShippingStreet(street)
      setShippingHouse(house)
      setShippingPostalCode(postalCode)
    }
  }

  const [submitResult, setSubmitResult] = useState<ResultProps>({
    isSuccess: false,
    message: '',
    isVisible: false
  })

  const onSubmit = async () => {
    const data = validateAllInputs()
    const result = await handleRegistration(data)
    result.isVisible = true
    console.log(result)
    setSubmitResult(result)
  }

  function validateAllInputs(): RegistrationData {
    setIsSubmitted(true)

    const emailValidationResult: string | undefined = validateEmail(email)
    const passwordValidationResult: string | undefined = validatePassword(password)
    const dateValidationResult: string | undefined = validateDate(date)
    const cityValidationResult: string | undefined = validateCity(city)
    const streetValidationResult: string | undefined = validateStreet(street)
    const houseValidationResult: string | undefined = validateStreet(house)
    const postalCodeValidationResult: string | undefined = validatePostalCode(postalCode)
    const firstNameValidationResult: string | undefined = validateName(firstName)
    const secondNameValidationResult: string | undefined = validateName(secondName)

    if (!selectedCountry) {
      setSelectedCountryError(true)
    } else {
      setSelectedCountryError(false)
    }

    if (!shippingSelectedCountry) {
      setShippingCountryError(true)
    } else {
      setShippingCountryError(false)
    }

    if (
      !emailValidationResult &&
      !passwordValidationResult &&
      !dateValidationResult &&
      !cityValidationResult &&
      !streetValidationResult &&
      !houseValidationResult &&
      !postalCodeValidationResult &&
      !firstNameValidationResult &&
      !secondNameValidationResult &&
      selectedCountry &&
      shippingSelectedCountry
    ) {
      const registrationData: RegistrationData = {
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
        date: date,
        billingAddress: {
          country: selectedCountry,
          city: city,
          street: street,
          house: house,
          postalCode: postalCode,
          isDefault: isDefaultBillingAddress
        },
        shippingAddress: {
          country: shippingSelectedCountry,
          city: shippingCity,
          street: shippingStreet,
          house: shippingHouse,
          postalCode: shippingPostalCode,
          isDefault: isDefaultShippingAddress
        }
      }
      return registrationData
    }
  }

  return (
    <FormProvider {...methods}>
      <form className='bg-secondaryColor dark:bg-grayMColor'>
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Registration form:</h3>
          <div className={'md:w-form'}>
            <div className={'md:flex justify-between'}>
              <InputColumn
                {...nameValidation}
                label='First name:'
                placeholder='Type your first name'
                isSubmitted={isSubmitted}
                onChange={(newValue: string) => setFirstName(newValue)}
              />
              <InputColumn
                {...nameValidation}
                label='Second name:'
                placeholder='Type your second name'
                isSubmitted={isSubmitted}
                onChange={(newValue: string) => setSecondName(newValue)}
              />
            </div>
            <Input {...dateValidation} isSubmitted={isSubmitted} onChange={(newValue: string) => setDate(newValue)} />
            <Input {...emailValidation} isSubmitted={isSubmitted} onChange={(newValue: string) => setEmail(newValue)} />
            <Input
              {...passwordValidation}
              isSubmitted={isSubmitted}
              onChange={(newValue: string) => setPassword(newValue)}
            />
            <h4 className={'text-h4 text-grayLColor dark:text-primaryColor font-bold my-sm text-center'}>
              Your billing address
            </h4>
            <div className={'md:flex md:justify-between items-end'}>
              <label
                className={'font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'}
                htmlFor='billingOptions'
              >
                Your country:
              </label>
              <div>
                {selectedCountryError && <p className='error-message text-red-500'>Please select your country</p>}
                <select
                  id={'billingOptions'}
                  value={selectedCountry}
                  onChange={e => {
                    setSelectedCountry(e.target.value)
                    setSelectedCountryError(false)
                    if (shouldCopy) setShippingSelectedCountry(e.target.value)
                  }}
                  className={
                    selectedCountryError
                      ? 'error p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black'
                      : 'p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black'
                  }
                >
                  <option value='' disabled>
                    Select your country
                  </option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
            <Input
              {...cityValidation}
              isSubmitted={isSubmitted}
              onChange={(newValue: string) => {
                setCity(newValue)
                if (shouldCopy) setShippingCity(newValue)
              }}
            />
            <Input
              {...streetValidation}
              isSubmitted={isSubmitted}
              onChange={(newValue: string) => {
                setStreet(newValue)
                if (shouldCopy) setShippingStreet(newValue)
              }}
            />
            <Input
              {...streetValidation}
              label='House:'
              placeholder='Type your house number'
              isSubmitted={isSubmitted}
              onChange={(newValue: string) => {
                setHouse(newValue)
                if (shouldCopy) setShippingHouse(newValue)
              }}
            />
            <Input
              {...postalCodeValidation}
              isSubmitted={isSubmitted}
              onChange={(newValue: string) => {
                setPostalCode(newValue)
                if (shouldCopy) setShippingPostalCode(newValue)
              }}
            />
            <div className={'md:ml-[250px]'}>
              <div className={'flex'}>
                <input
                  id={'setAsDefAddress'}
                  type={'checkbox'}
                  onChange={() => setIsDefaultBillingAddress(!isDefaultBillingAddress)}
                ></input>
                <label
                  className={
                    'block ml-min font-semibold text-h5 text-grayLColor dark:text-primaryColor whitespace-nowrap'
                  }
                  htmlFor='setAsDefAddress'
                >
                  Set as default address
                </label>
              </div>
              <div className={'flex'}>
                <input id={'setAsShipAddress'} type={'checkbox'} onClick={handleCopyClick}></input>
                <label
                  className={
                    'block ml-min font-semibold text-h5 text-grayLColor dark:text-primaryColor whitespace-nowrap'
                  }
                  htmlFor='setAsShipAddress'
                >
                  Set as shipping address
                </label>
              </div>
            </div>
            <h4 className={'text-h4 text-grayLColor dark:text-primaryColor font-bold my-sm text-center'}>
              Your shipping address
            </h4>

            <div className={'md:flex md:justify-between items-end'}>
              <label
                className={'font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'}
                htmlFor='shippingOptions'
              >
                Your country:
              </label>
              <div>
                {shippingCountryError && <p className='error-message text-red-500'>Please select your country</p>}
                <select
                  id={'shippingOptions'}
                  value={shippingSelectedCountry}
                  disabled={isShippingAddressActive}
                  onChange={(e): void => {
                    setShippingSelectedCountry(e.target.value)
                    setShippingCountryError(false)
                  }}
                  className={
                    shippingCountryError
                      ? 'error p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black'
                      : 'p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black'
                  }
                >
                  <option value='' disabled>
                    Select your country
                  </option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>

            <Input
              {...cityValidation}
              isSubmitted={isSubmitted}
              val={shippingCity}
              onChange={(newValue: string) => setShippingCity(newValue)}
              disabled={isShippingAddressActive}
            />

            <Input
              {...streetValidation}
              isSubmitted={isSubmitted}
              val={shippingStreet}
              onChange={(newValue: string) => setShippingStreet(newValue)}
              disabled={isShippingAddressActive}
            />
            <Input
              {...streetValidation}
              label='House:'
              placeholder='Type your house number'
              isSubmitted={isSubmitted}
              val={shippingHouse}
              onChange={(newValue: string) => setShippingHouse(newValue)}
              disabled={isShippingAddressActive}
            />
            <Input
              {...postalCodeValidation}
              isSubmitted={isSubmitted}
              val={shippingPostalCode}
              onChange={(newValue: string) => setShippingPostalCode(newValue)}
              disabled={isShippingAddressActive}
            />
            <div className={'flex md:ml-[250px]'}>
              <input
                id={'setAsDefAddress2'}
                type={'checkbox'}
                onChange={() => setIsDefaultShippingAddress(!isDefaultShippingAddress)}
              ></input>
              <label
                className={
                  'block ml-min font-semibold text-h5 text-grayLColor dark:text-primaryColor whitespace-nowrap'
                }
                htmlFor='setAsDefAddress2'
              >
                Set as default address
              </label>
            </div>
            <div className={'my-sm'}>
              <ButtonForm onClick={onSubmit}>CREATE AN ACCOUNT</ButtonForm>
            </div>
            <ResultMessage {...submitResult}></ResultMessage>
            <p className={'text-h4 font-semibold text-grayLColor dark:text-primaryColor'}>
              Do you already have an account?
            </p>
            <div className={'my-sm'}>
              <ButtonForm to={'/sign-in'}>SIGN IN</ButtonForm>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
