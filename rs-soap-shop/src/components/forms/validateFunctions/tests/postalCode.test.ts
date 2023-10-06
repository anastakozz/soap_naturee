import { validatePostalCode } from '../postalCode';

describe('validatePostalCode function test', (): void => {
  it('should return error message if postal code contains non-numeric characters', (): void => {
    const result1: string | undefined = validatePostalCode('12345A');
    const result2: string | undefined = validatePostalCode('12 345');
    const result3: string | undefined = validatePostalCode('ABCDE');

    expect(result1).toBe('The zip code must contain only numbers');
    expect(result2).toBe('The zip code must contain only numbers');
    expect(result3).toBe('The zip code must contain only numbers');
  });

  it('should return error message if postal code length is not equal to 5', (): void => {
    const result1: string | undefined = validatePostalCode('1234');
    const result2: string | undefined = validatePostalCode('123456');

    expect(result1).toBe('The length of the zip code must be equal to 5');
    expect(result2).toBe('The length of the zip code must be equal to 5');
  });

  it('should return undefined if postal code is valid', (): void => {
    const result: string | undefined = validatePostalCode('12345');
    expect(result).toBeUndefined();
  });
});
