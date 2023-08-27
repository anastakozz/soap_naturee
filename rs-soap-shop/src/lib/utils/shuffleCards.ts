import { Product } from '../interfaces';

export function shuffleProducts(data: Product[]): Product[] {
  const random = data.map(Math.random);
  data.sort((a, b) => random[data.indexOf(a)] - random[data.indexOf(b)]);
  return data;
}
