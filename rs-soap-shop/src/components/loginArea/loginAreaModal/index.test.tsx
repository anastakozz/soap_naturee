import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import LoginAreaModal from './index'

describe('LoginAreaModal', () => {
  it('should render the logged in user interface correctly', () => {
    const onCloseMock = jest.fn()
    const { getByText } = render(<LoginAreaModal isLoggedIn={true} onClose={onCloseMock} />, {
      wrapper: MemoryRouter
    })

    const myProfileLink = getByText('My profile')
    const logOutLink = getByText('Log Out')
    expect(myProfileLink).toBeInTheDocument()
    expect(logOutLink).toBeInTheDocument()
  })

  it('should call onClose and handleLogout when the "Log Out" link is clicked', () => {
    const onCloseMock = jest.fn()
    const { getByText } = render(<LoginAreaModal isLoggedIn={true} onClose={onCloseMock} />, {
      wrapper: MemoryRouter
    })

    const logOutLink = getByText('Log Out')
    fireEvent.click(logOutLink)

    expect(onCloseMock).toHaveBeenCalled()
  })

  it('should call onClose when a navigation link is clicked', () => {
    const onCloseMock = jest.fn()
    const { getByText } = render(<LoginAreaModal isLoggedIn={false} onClose={onCloseMock} />, {
      wrapper: MemoryRouter
    })

    const signInLink = getByText('Sign in')
    fireEvent.click(signInLink)

    expect(onCloseMock).toHaveBeenCalled()
  })
})
