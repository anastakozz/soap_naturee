export function validatePassword(password: string) {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;

  if (password.length < 8) {
    return 'The password must contain at least 8 characters.';
  } else   if (!uppercaseRegex.test(password)) {
    return 'The password must contain at least 1 capital letter.';
  } else   if (!lowercaseRegex.test(password)) {
    return 'The password must contain at least 1 lowercase letter.';
  } else   if (!numberRegex.test(password)) {
    return 'The password must contain at least 1 digit.';
  } else  return '';
}
