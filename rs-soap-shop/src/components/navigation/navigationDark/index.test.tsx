import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import NavigationDark from './index'

describe('NavigationDark', () => {
  it('should render the navigation links', () => {
    const { getByText } = render(<NavigationDark />, {
      wrapper: MemoryRouter
    })

    const homeLink = getByText('Home')
    const productsLink = getByText('Our products')
    const aboutUsLink = getByText('About us')

    expect(homeLink).toBeInTheDocument()
    expect(productsLink).toBeInTheDocument()
    expect(aboutUsLink).toBeInTheDocument()
  })
})
