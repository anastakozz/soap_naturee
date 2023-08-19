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
  onChange?: () => void
}

export interface InputErrorProps {
  message: string
}

export interface InputErrorObject {
  error: {
    message: string
  }
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
