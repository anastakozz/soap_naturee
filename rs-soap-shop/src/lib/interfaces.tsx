export interface ButtonProps {
  children: string
  onClick?: VoidFunction
  to?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface InputProps {
  label: string
  type: string
  val?: string
  placeholder?: string
  isSubmitted?: boolean
  onChange?: (value: string) => void
  disabled?: boolean
}

export interface InputErrorObject {
  error: {
    message: string
  }
}

export interface RegistrationData {
  firstName: string
  secondName: string
  email: string
  password: string
  date: string
  billingAddress: Address
  shippingAddress: Address
}

export interface Address {
  country: string
  city: string
  street: string
  house: string
  postalCode: string
  isDefault: boolean
}

export interface CategoryCardProps {
  name: string
  path: string
  link: string
}

export interface ProductCardProps {
  label: string
  description: string
  imgSrc: string
  link: string
  price: number
  sale: boolean
  oldPrice?: number
}

export interface RegistrationData {
  firstName: string
  secondName: string
  email: string
  password: string
  date: string
  billingAddress: Address
  shippingAddress: Address
}

export interface Address {
  country: string
  city: string
  street: string
  house: string
  postalCode: string
  isDefault: boolean
}

export interface ResultProps {
  isSuccess?: boolean | null
  message: string
  isVisible?: boolean
}
