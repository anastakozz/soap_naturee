import { Product, ProductCardProps } from '../../interfaces'

export default function toCardAdapter(data: Product): ProductCardProps {
  const dataForCard: ProductCardProps = {
    label: data.name['en'],
    description: data.description['en'],
    imgSrc: data.masterVariant.images[0].url,
    link: `/product/${data.slug['en']}`,
    price: data.masterVariant.prices[0].value.centAmount,
    isOnSale: false,
    oldPrice: null
  }
  return dataForCard
}
