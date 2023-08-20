import { validateEmail } from '../e-mail'

describe('validateEmail function test', (): void => {
  it('should return error message if email is empty', (): void => {
    const result: string = validateEmail('')
    expect(result).toBe('The e-mail cannot be empty.')
  })

  it('should return error message if email contains leading or trailing spaces', (): void => {
    const result1: string = validateEmail('  example@example.com')
    const result2: string = validateEmail('example@example.com  ')
    expect(result1).toBe('The email address must not contain any leading or trailing spaces.')
    expect(result2).toBe('The email address must not contain any leading or trailing spaces.')
  })

  it('should return error message if email does not contain a valid domain', (): void => {
    const result1: string = validateEmail('example@invalid')
    const result3: string = validateEmail('invalid.email.com')
    expect(result1).toBe('The email address must contain a valid domain.')
    expect(result3).toBe('The email address must contain a valid domain.')
  })

  it('should return error message if email format is invalid', (): void => {
    const result2: string = validateEmail('example@.com')
    expect(result2).toBe("Email address must contain an '@' symbol separating local part and domain name.")
  })

  it('should return undefined if email is valid', (): void => {
    const result: string = validateEmail('valid@example.com')
    expect(result).toBeUndefined()
  })
})
