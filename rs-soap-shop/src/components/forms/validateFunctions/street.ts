export function validateStreet(street: string): string | undefined {
  if (!street || street === '') return 'Field must contain at least one character'
}
