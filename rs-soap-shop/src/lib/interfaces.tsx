export interface ButtonProps {
  children: string
  onClick?: VoidFunction
  to?: string
}

export interface InputProps {
  label: string
  type: string
  placeholder?: string
  isSubmitted?: boolean
}

export interface InputErrorProps {
  message: string
}

export interface InputErrorObject {
  error: {
    message: string
  }
}
