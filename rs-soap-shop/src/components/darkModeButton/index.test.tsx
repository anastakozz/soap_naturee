import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { DarkModeButton } from './index'

describe('DarkModeButton', () => {
  it('should call onChange when the button is clicked', () => {
    const onChangeMock = jest.fn()
    const { container } = render(<DarkModeButton onChange={onChangeMock} />)

    const button = container.querySelector('.change-mode-button')
    if (button) fireEvent.click(button)

    expect(onChangeMock).toHaveBeenCalled()
  })
})
