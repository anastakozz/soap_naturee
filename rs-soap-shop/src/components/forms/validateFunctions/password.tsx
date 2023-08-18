export function validatePassword(password: string) {
  const uppercaseRegex = /[A-ZА-Я]/;
  const lowercaseRegex = /[a-zа-я]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (password) {
    if (password.trim() !== password) {
      return 'The password must not contain leading or trailing whitespace.';
    } else if (password.length < 8) {
      return 'The password must contain at least 8 characters.';
    } else if (!uppercaseRegex.test(password)) {
      return 'The password must contain at least 1 capital letter.';
    } else if (!lowercaseRegex.test(password)) {
      return 'The password must contain at least 1 lowercase letter.';
    } else if (!numberRegex.test(password)) {
      return 'The password must contain at least 1 digit.';
    } else if (!specialCharRegex.test(password)) {
      return 'The password must contain at least 1 special character.';
    } else {
      return '';
    }
  } else return 'The password must contain at least 1 special character.'

}
