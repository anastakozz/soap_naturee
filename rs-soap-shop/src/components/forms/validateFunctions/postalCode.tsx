export function validatePostalCode(code: string) {
  const numericCode = parseInt(code, 10);

  if (isNaN(numericCode)) {
    return 'The postal code must contain only numbers';
  } else if (code.length !== 5) {
    return 'The length of the postal code must be equal to 5';
  } else if (code.includes(' ')) {
    return 'The postal code must not include spaces';
  }
}


