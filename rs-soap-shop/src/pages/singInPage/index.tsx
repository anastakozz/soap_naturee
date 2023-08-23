import React, { useEffect } from 'react'
import { LoginForm } from '../../components/forms/LoginForm'
import { useNavigate } from 'react-router-dom'

function SingInPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])
  return <LoginForm />
}

export default SingInPage
