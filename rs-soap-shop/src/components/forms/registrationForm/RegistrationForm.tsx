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
import React, {useState} from 'react'
import {InputColumn} from '../inputColumn';
import FormButton from '../formButton';
import {Input} from '../Input';
import {validateEmail} from '../validateFunctions/e-mail';
import {validatePassword} from '../validateFunctions/password';
import {validateDate} from '../validateFunctions/date';
import {validateCity} from '../validateFunctions/city';
import {validateStreet} from '../validateFunctions/street';
import {validatePostalCode} from '../validateFunctions/postalCode';
import {validateName} from '../validateFunctions/name';

export const RegistrationForm = () => {
  const methods = useForm()

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const [selectedCountryError, setSelectedCountryError] = useState(false);




  function validateAllInputs() {

    setIsSubmitted(true);

    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);
    const dateValidationResult = validateDate(date);
    const cityValidationResult = validateCity(city);
    const streetValidationResult = validateStreet(street);
    const houseValidationResult = validateStreet(house);
    const postalCodeValidationResult = validatePostalCode(postalCode);
    const firstNameValidationResult = validateName(firstName);
    const secondNameValidationResult = validateName(secondName);

    if (!selectedCountry) {
      setSelectedCountryError(true);
      return;
    } else {
      setSelectedCountryError(false);
    }

    if (!emailValidationResult && !passwordValidationResult && !dateValidationResult && !cityValidationResult &&
      !streetValidationResult && !houseValidationResult && !postalCodeValidationResult && !firstNameValidationResult &&
    !secondNameValidationResult && selectedCountry
    ) {

      const registrationData = {
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
        date: date,
        country: selectedCountry,
        city: city,
        street: street,
        house: house,
        postalCode: postalCode
      }
      console.log(registrationData)
    }
  }

  return (
    <FormProvider {...methods}>
      <form className='bg-secondaryColor dark:bg-grayMColor'>
        <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
          <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Registration form:</h3>
          <div className={'md:w-form'}>
            <div className={'md:flex justify-between'}>
              <InputColumn {...nameValidation}
                           label='First name:'
                           placeholder='Type your first name'
                           isSubmitted={isSubmitted}
                           onChange={(newValue) => setFirstName(newValue)}
              />
              <InputColumn {...nameValidation}
                           label='Second name:'
                           placeholder='Type your second name'
                           isSubmitted={isSubmitted}
                           onChange={(newValue) => setSecondName(newValue)}
              />
            </div>
            <Input {...dateValidation}
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setDate(newValue)}
            />
            <Input {...emailValidation}
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setEmail(newValue)}
            />
            <Input {...passwordValidation}
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setPassword(newValue)}
            />
            <h4 className={'text-h4 text-grayLColor dark:text-primaryColor font-bold my-sm text-center'}>Your address</h4>
            <div className={'md:flex md:justify-between items-end'}>
              <label className={'font-semibold text-h4 text-grayLColor dark:text-primaryColor whitespace-nowrap'} htmlFor="options">Your country:</label>
              <div>
                {selectedCountryError && <p className="error-message text-red-500">Please select your country</p>}
                <select
                  id={'options'}
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedCountryError(false);
                  }}
                  className={selectedCountryError ? 'error p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black' : 'p-5 font-medium rounded-md w-inputs border border-slate-300 placeholder:opacity-60 dark:bg-graySColor dark:placeholder-black'}
                >
                  <option value="" disabled>Select your country</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>

            <Input {...cityValidation}
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setCity(newValue)}
            />
            <Input {...streetValidation}
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setStreet(newValue)}
            />
            <Input {...streetValidation}
                   label='House:'
                   placeholder='Type your house number'
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setHouse(newValue)}
            />
            <Input {...postalCodeValidation}
                   isSubmitted={isSubmitted}
                   onChange={(newValue) => setPostalCode(newValue)}
            />
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
