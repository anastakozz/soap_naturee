import React, { useEffect } from 'react';
import { RegistrationForm } from '../../components/forms/RegistrationForm';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
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
