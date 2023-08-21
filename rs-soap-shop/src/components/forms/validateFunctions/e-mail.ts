export function validateEmail(email: string): string | undefined {
  if (!email) {
    return 'The e-mail cannot be empty.'
  } else if (email.includes(' ')) {
    return 'The email address must not contain any leading or trailing spaces.'
  } else {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!email.match(emailPattern)) {
      return 'Invalid email address format.'
    }
  }
}
