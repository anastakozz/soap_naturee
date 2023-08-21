export function validateCity(city: string): string | undefined {
  if (city) {
    if (city.length === 0) {
      return 'The string must contain at least one character.'
    }
  } else return 'The string must contain at least one character.'
}
