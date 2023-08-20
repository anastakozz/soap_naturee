import { validateStreet } from '../street'

describe('street validation function test', (): void => {
  it('should return error message if street is empty', (): void => {
    const result: string = validateStreet('')
    expect(result).toBe('Field must contain at least one character')
  })
  it('should return error message if street is undefined', (): void => {
    const result: string = validateStreet(undefined)
    expect(result).toBe('Field must contain at least one character')
  })
  it('should return undefined if street is correct', (): void => {
    const result: string = validateStreet('Wall')
    expect(result).toBeUndefined()
  })
})
