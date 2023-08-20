import { validateName } from '../name'

describe('validateName function test', (): void => {
  it('should return error message if name is empty', (): void => {
    const result: string | undefined = validateName('')
    expect(result).toBe('Must contain at least one character')
  })

  it('should return error message if name contains special characters or numbers', (): void => {
    const result1: string | undefined = validateName('John123')
    const result2: string | undefined = validateName('Mary Smith')
    const result3: string | undefined = validateName('Иван123')

    expect(result1).toBe('Must not include special characters or numbers')
    expect(result2).toBe('Must not include special characters or numbers')
    expect(result3).toBe('Must not include special characters or numbers')
  })

  it('should return undefined if name is valid', (): void => {
    const result: string | undefined = validateName('John')
    expect(result).toBeUndefined()
  })
})
