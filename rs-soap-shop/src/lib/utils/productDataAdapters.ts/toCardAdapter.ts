import { Product, ProductCardProps } from '../../interfaces'

export default function toCardAdapter(data: Product): ProductCardProps {
  const dataForCard: ProductCardProps = {
    label: data.name['en-US'],
    description: data.description['en-US'],
    imgSrc: data.masterVariant.images[0].url,
    // link: string
    price: 999,
    isOnSale: false,
    oldPrice: 1000
  }
  return dataForCard
}
