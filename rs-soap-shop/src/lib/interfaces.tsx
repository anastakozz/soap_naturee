export interface ButtonProps {
  children: string
  onClick?: VoidFunction
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