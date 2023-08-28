import { Product, DetailsProps } from '../../interfaces';

export default function toDetailsAdapter(data: Product): DetailsProps {
  const variant = data.masterVariant;
  const paths = variant.images.map((item): string => item.url)
  const dataForDetails: DetailsProps = {
    productId: data.id,
    name: data.name['en'],
    description: data.description['en'],
    imgSources: paths,
    link: `/product/${data.key}`,
    price: `${variant.prices[0].value.centAmount / 100} ${variant.prices[0].value.currencyCode}`,
    isOnSale: false,
    newPrice: null
  };
  const sale = variant.prices[0].discounted;
  if (sale) {
    dataForDetails.isOnSale = true;
    dataForDetails.newPrice = `${sale.value.centAmount / 100} ${sale.value.currencyCode}`;
  }
  return dataForDetails;
}
