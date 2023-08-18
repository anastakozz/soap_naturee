export interface ButtonProps {
  children: string
  onClick?: VoidFunction
  to?: string
}

export interface InputProps {
  label: string
  type: string
  val?: string
  placeholder?: string
  isSubmitted?: boolean
  onChange?: (value: string) => void;
  disabled?: boolean
}

export interface InputErrorProps {
  message: string
}

export interface InputErrorObject {
  error: {
    message: string
  }
}

export interface registrationData {
  firstName: string
  secondName: string
  email: string
  password: string
  date: string
  billingAddress: address
  shippingAddress: address
}

export interface address {
  country: string
  city: string
  street: string
  house: string
  postalCode: string
  isDefault: boolean
}

