import { validateCity } from '../city'

describe('validateCity function', (): void => {
  it('should return an error message for empty city', (): void => {
    const errorMessage: string = validateCity('')
    expect(errorMessage).toBe('The string must contain at least one character.')
  })

  it('should return undefined for valid city', (): void => {
    const errorMessage: string = validateCity('New York')
    expect(errorMessage).toBeUndefined()
  })

  it('should return an error for valid city with special characters', (): void => {
    const errorMessage: string = validateCity('Los Angeles!')
    expect(errorMessage).toBe('The string must not contain special characters or numbers.')
  })
})
