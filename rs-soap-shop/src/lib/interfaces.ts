import { Category, Keyword, Price, ProductAttributes, ProductImage } from './types'

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
  link?: string
  price: string
  isOnSale: boolean
  newPrice?: number
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

export interface BannerProps {
  p: string
  h2: string
  h4: string
  buttonText: string
  linkAdress: string
}

export interface Product {
  id: string
  version: string
  productType: {
    typeId: string
    id: string
  }
  name: {
    'en': string
  }
  description: {
    'en': string
  }
  categories: Category[]
  // categoryOrderHints: {
  //   [categoryID: string]: string
  // }
  // variants: []
  slug: {
    'en': string
  }
  masterVariant: {
    attributes: ProductAttributes[]
    // assets: []
    images: ProductImage[]
    prices: Price[]
    id: number
  }
  metaTitle: {
    'en': string
  }
  metaDescription: {
    'en': string
  }
  searchKeywords: {
    'en': Keyword[]
  }
  hasStagedChanges: boolean
  published: boolean
  key: string
  taxCategory: {
    typeId: string
    id: string
  }
  priceMode: string
  createdAt: string
  lastModifiedAt: string
}
