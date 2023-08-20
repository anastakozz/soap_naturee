import { validatePassword } from '../password'

describe('validatePassword function test', (): void => {
  it('should return error message if password is empty', (): void => {
    const result: string | undefined = validatePassword('')
    expect(result).toBe('The password must contain at least 1 special character.')
  })

  it('should return error message if password contains leading or trailing whitespace', (): void => {
    const result1: string | undefined = validatePassword(' Password123 ')
    const result2: string | undefined = validatePassword('    Abc123!   ')

    expect(result1).toBe('The password must not contain leading or trailing whitespace.')
    expect(result2).toBe('The password must not contain leading or trailing whitespace.')
  })

  it('should return error message if password length is less than 8 characters', (): void => {
    const result: string | undefined = validatePassword('Pass123')

    expect(result).toBe('The password must contain at least 8 characters.')
  })

  it('should return error message if password does not contain uppercase letter', (): void => {
    const result: string | undefined = validatePassword('password123!')

    expect(result).toBe('The password must contain at least 1 capital letter.')
  })

  it('should return error message if password does not contain lowercase letter', (): void => {
    const result: string | undefined = validatePassword('PASSWORD123!')

    expect(result).toBe('The password must contain at least 1 lowercase letter.')
  })

  it('should return error message if password does not contain a digit', (): void => {
    const result: string | undefined = validatePassword('Password!')

    expect(result).toBe('The password must contain at least 1 digit.')
  })

  it('should return error message if password does not contain a special character', (): void => {
    const result: string | undefined = validatePassword('Password123')

    expect(result).toBe('The password must contain at least 1 special character.')
  })

  it('should return empty string if password is valid', (): void => {
    const result: string | undefined = validatePassword('StrongP@ssword123')
    expect(result).toBe('')
  })
})
