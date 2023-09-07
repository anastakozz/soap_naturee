import { validateName } from '../name';

describe('validateName function', () => {
  it('should return an error message for empty input', () => {
    const errorMessage = validateName('');
    expect(errorMessage).toEqual('Must contain at least one character');
  });

  it('should return undefined for valid input with letters and spaces', () => {
    const errorMessage = validateName('John Doe');
    expect(errorMessage).toBeUndefined();
  });

  it('should return an error message for input with special characters', () => {
    const errorMessage = validateName('Jane@Doe');
    expect(errorMessage).toEqual('Must not include special characters or numbers');
  });

  it('should return an error message for input with numbers', () => {
    const errorMessage = validateName('Alice123');
    expect(errorMessage).toEqual('Must not include special characters or numbers');
  });
});
