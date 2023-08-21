import { validateEmail } from '../e-mail'

describe('validateEmail function', () => {
  it('should return an error for an empty email', () => {
    expect(validateEmail('')).toBe('The e-mail cannot be empty.')
  })

  it('should return an error for an email with leading space', () => {
    expect(validateEmail(' test@example.com')).toBe(
      'The email address must not contain any leading or trailing spaces.'
    )
  })

  it('should return an error for an email with trailing space', () => {
    expect(validateEmail('test@example.com ')).toBe(
      'The email address must not contain any leading or trailing spaces.'
    )
  })

  it('should return an error for an email with invalid format', () => {
    expect(validateEmail('invalid.email')).toBe('Invalid email address format.')
  })

  it('should return undefined for a valid email', () => {
    expect(validateEmail('valid.email@example.com')).toBeUndefined()
  })
})
