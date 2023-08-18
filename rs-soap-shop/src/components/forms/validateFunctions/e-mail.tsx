export function validateEmail(email: string) {
  if (!email) {
    return 'The e-mail cannot be empty.';
  } else if (email.includes(' ')) {
    return 'The email address must not contain any leading or trailing spaces.';
  } else if (!/@.*\.[^.]{2,4}$/.test(email)) {
    return 'The email address must contain a valid domain.';
  } else {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      return 'Email address must contain an \'@\' symbol separating local part and domain name.';
    }
  }
}

