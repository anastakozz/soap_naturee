import { getActiveCart, createCart, updateCart } from './cart.service';
import { getTokenFromStorage } from '../lib/utils/getLocalStorageToken';
import { ProductListItem } from '../lib/types';

export async function getCart() {
  const token = getTokenFromStorage();

  try {
    const cart = await getActiveCart(token);
    console.log('got active cart ' + cart.data.id);
    return cart;
  } catch (e) {
    console.log(e);
    console.log('no active cart');
    try {
      const cart = await createCart(token);
      updateCart(token, cart.data.id, cart.data.version);
      console.log('created new cart ' + cart.data.id);
      return cart;
    } catch (err) {
      console.log(err);
    }
  }
}

export async function getProductsInCart(): Promise<string[]> {
  const cart = await getCart();
  const list = cart.data.lineItems;
  return list.map((a: ProductListItem) => a.productId);
}
