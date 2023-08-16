export function validateEmail(email: string) {
  if (!email) {
    return 'The e-mail cannot be empty.';
  } else {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      return 'Incorrect e-mail format.';
    }
  }
}
