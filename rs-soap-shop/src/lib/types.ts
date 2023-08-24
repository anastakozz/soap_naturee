import { type } from 'os'

export type Category = {
  typeId: string
  id: string
}

export type Keyword = {
  text: string
}

export type ProductImage = {
  url: string
  label: string
  dimensions: {
    w: number
    h: number
  }
}

export type ProductAttributes = {
  name: string
  value: string[]
}
