export const nameValidation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required'
    },
    minLength: {
      value: 3,
      message: '3 characters min'
    }
  }
}

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
}

export const numValidation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required'
    }
  }
}

export const emailValidation = {
  name: 'email',
  label: 'Your e-mail:',
  type: 'email',
  id: 'email',
  placeholder: 'Type your email address',
  validation: {
    required: {
      value: true,
      message: 'required'
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid'
    }
  }
}
