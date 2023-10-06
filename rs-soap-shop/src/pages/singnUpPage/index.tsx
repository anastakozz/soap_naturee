import React, { useEffect } from 'react';
import { RegistrationForm } from '@components/forms/RegistrationForm';
import { useNavigate } from 'react-router-dom';
import scrollToTop from '@utils/scrollToTop';
import { tokenNames } from '@enums';

function SignUpPage() {
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
    if (localStorage.getItem(`${tokenNames.userToken}`)) {
      navigate('/');
    }
  }, []);
  return (
    <>
      <RegistrationForm />
    </>
  );
}

export default SignUpPage;
