export function validateStreet(street: string) {
  if (!street || street === '') return 'Field must contain at least one character';
}