import { validateCity } from '../city'

describe('validateCity function', () => {
  it('should return an error message for empty city', () => {
    const errorMessage = validateCity('')
    expect(errorMessage).toEqual('The string must contain at least one character.')
  })

  it('should return undefined for valid city', () => {
    const errorMessage = validateCity('New York')
    expect(errorMessage).toBeUndefined()
  })

  it('should return undefined for valid city with special characters', () => {
    const errorMessage = validateCity('Los Angeles!')
    expect(errorMessage).toBeUndefined()
  })
})
