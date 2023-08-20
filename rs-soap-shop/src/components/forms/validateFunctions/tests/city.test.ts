import { validateCity } from '../city'

describe('validateCity function', (): void => {
  it('should return an error message if the city is an empty string', (): void => {
    const result = validateCity('')
    expect(result).toBe('The string must contain at least one character.')
  })

  it('should return an error message if the city contains special characters or numbers', (): void => {
    const result1: string = validateCity('New York!')
    const result2: string = validateCity('Los Angeles123')
    const result3: string = validateCity('San_Francisco')

    expect(result1).toBe('The string must not contain special characters or numbers.')
    expect(result2).toBe('The string must not contain special characters or numbers.')
    expect(result3).toBe('The string must not contain special characters or numbers.')
  })

  it('should return undefined if the city is valid', (): void => {
    const result: string = validateCity('Seattle')
    expect(result).toBeUndefined()
  })

  it('should return an error message if input is undefined', (): void => {
    const result: string = validateCity(undefined)
    expect(result).toBe('The string must contain at least one character.')
  })
})
