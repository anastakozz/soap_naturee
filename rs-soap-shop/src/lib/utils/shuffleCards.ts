import {Product, ProductCardProps} from '../interfaces';
import {getProductsList} from '../../services/product.service';
import toCardAdapter from './productDataAdapters.ts/toCardAdapter';

export const items = await getCardsData()
async function getCardsData(): Promise<ProductCardProps[]> {
  const data: Product[] = await getProductsList()
  if (data) {
    const shuffledData = shuffleProducts(data).slice(0, 6)
    const dataAdapted = shuffledData.map((product: Product) => toCardAdapter(product))
    return dataAdapted
  }
}

function shuffleProducts(data: Product[]): Product[] {
  const random = data.map(Math.random)
  data.sort((a, b) => random[data.indexOf(a)] - random[data.indexOf(b)])
  return data
}