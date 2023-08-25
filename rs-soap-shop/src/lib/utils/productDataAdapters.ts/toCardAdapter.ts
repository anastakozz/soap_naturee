import { Product, ProductCardProps } from '../../interfaces'

export default function toCardAdapter(data: Product): ProductCardProps {
  const variant = data.masterVariant
  const dataForCard: ProductCardProps = {
    label: data.name['en'],
    description: data.searchKeywords['en'][0].text,
    imgSrc: variant.images[0].url,
    link: `/product/${data.slug['en']}`,
    price: `${variant.prices[0].value.centAmount} ${variant.prices[0].value.currencyCode}`,
    isOnSale: false,
    newPrice: null
  }
  return dataForCard
}
