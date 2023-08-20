export function validateName(inputValue: string): string | undefined {
  const regex = /^[a-zA-Zа-яА-Я]+$/
  if (inputValue.length === 0) {
    return 'Must contain at least one character'
  } else if (!regex.test(inputValue)) {
    return 'must not include special characters or numbers'
  }
}
