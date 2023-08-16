import { emailValidation, passwordValidation } from '../../../lib/utils/inputValidations';
import React from 'react';
import FormButton from '../formButton';
import {Input} from '../Input';

export const LoginForm = () => {

  function test() {
    console.log('clicked')
  }

  return (
    <form className='bg-secondaryColor dark:bg-grayMColor'>
      <div className='container px-sm py-sm md:px-big md:py-bigY max-w-[1440px] mx-auto lg:px-big'>
        <h3 className={'text-accentColor dark:text-primaryColor text-h3 font-bold pb-bigY'}>Sign In form:</h3>
        <div className={'md:w-form'}>
          <Input {...emailValidation} />
          <Input {...passwordValidation} />
        </div>
        <div className={'my-sm'}>
          <FormButton onClick={test}>SIGN IN</FormButton>
        </div>
        <p className={'text-h4 dark:text-primaryColor font-semibold text-grayLColor'}>Don&apos;t have an account yet?</p>
        <div className={'my-sm'}>
          <FormButton to={'/sign-up'}>CREATE AN ACCOUNT</FormButton>
        </div>
      </div>
    </form>
  );
};

