export const nameValidation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...'
};

export const passwordValidation = {
  name: 'password',
  label: 'Your password:',
  type: 'password',
  id: 'password',
  placeholder: 'Type your password',
  validation: {
    required: {
      value: true,
      message: 'required'
    },
    minLength: {
      value: 6,
      message: 'min 6 characters'
    }
  }
};

export const postalCodeValidation = {
  name: 'postalCode',
  label: 'Postal code:',
  type: 'postalCode',
  placeholder: 'Type your postal code'
};

export const emailValidation = {
  name: 'mail',
  label: 'Your e-mail:',
  type: 'mail',
  placeholder: 'Type your email address'
};

export const dateValidation = {
  name: 'date',
  label: 'Date of birth:',
  type: 'date'
};

export const streetValidation = {
  name: 'street',
  label: 'Street:',
  type: 'street',
  placeholder: 'Type your street'
};

export const cityValidation = {
  name: 'city',
  label: 'City:',
  type: 'city',
  placeholder: 'Type your city'
};
