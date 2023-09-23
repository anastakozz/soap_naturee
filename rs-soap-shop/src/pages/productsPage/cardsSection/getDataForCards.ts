import { Product, ProductCardProps } from '../../../lib/interfaces';
import { getProductsInCart } from '../../../services/handleCart';
import toCardAdapter from '../../../lib/utils/productDataAdapters.ts/toCardAdapter';

export async function adaptCardsData(data: Product[]): Promise<ProductCardProps[]> {
  const cartProducts = await getProductsInCart();

  if (data) {
    const dataAdapted = data.map((product: Product) => {
      const isInCart = cartProducts.includes(product.id);
      return toCardAdapter(product, isInCart);
    });
    return dataAdapted;
  }
}
