export function validateCity(city: string): string | undefined {
  const specialCharsAndNumbersRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/

  if (city) {
    if (city.length === 0) {
      return 'The string must contain at least one character.'
    } else if (specialCharsAndNumbersRegex.test(city)) {
      return 'The string must not contain special characters or numbers.'
    }
  } else return 'The string must contain at least one character.'
}
