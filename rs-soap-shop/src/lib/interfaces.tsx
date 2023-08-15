export interface ButtonProps {
  children: string
  onClick?: VoidFunction
  to?: string
}

export interface InputProps {
  label: string
  type: string
  id: string
  placeholder: string
  validation: object
  name: string
  multiline?: boolean
  className?: string
}

export interface InputErrorProps {
  message: string
}

export interface InputErrorObject {
  error: {
    message: string
  }
}
