export function validatePostalCode(code: string): string | undefined {
  const numericRegex = /^[0-9]+$/;

  if (!numericRegex.test(code)) {
    return 'The zip code must contain only numbers';
  } else if (code.length !== 5) {
    return 'The length of the zip code must be equal to 5';
  }
}
