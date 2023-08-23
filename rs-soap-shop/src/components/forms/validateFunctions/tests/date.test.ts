import { validateDate } from '../date'

describe('validateDate function test', (): void => {
  it('should return error message if input is not a valid date', (): void => {
    const result: string = validateDate('invalid-date')
    expect(result).toBe('Enter the correct date.')
  })

  it('should return error message if date is in the future', (): void => {
    const today: Date = new Date()
    const futureDate: Date = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
    const result: string = validateDate(futureDate.toISOString())
    expect(result).toBe('The date of birth cannot be in the future.')
  })

  it('should return error message if user is younger than 13 years', (): void => {
    const today: Date = new Date()
    const minDate: Date = new Date()
    minDate.setFullYear(today.getFullYear() - 12)
    const result: string = validateDate(minDate.toISOString())
    expect(result).toBe('You must be at least 13 years old.')
  })

  it('should return error message if date is before 1900', (): void => {
    const minAllowedDate: Date = new Date('1899-12-31')
    const result: string = validateDate(minAllowedDate.toISOString())
    expect(result).toBe('The date cannot be before 1900.')
  })

  it('should return undefined if date is valid', (): void => {
    const validDate: Date = new Date('1990-01-01')
    const result: string = validateDate(validDate.toISOString())
    expect(result).toBeUndefined()
  })
})
