import React, { useEffect } from 'react';
import { RegistrationForm } from '../../components/forms/RegistrationForm';
import { useNavigate } from 'react-router-dom';
import scrollToTop from '../../lib/utils/scrollToTop';
import { tokenNames } from '../../lib/enums';

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
