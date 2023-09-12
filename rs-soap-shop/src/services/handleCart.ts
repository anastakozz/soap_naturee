import { getActiveCart, createCart, updateCart, addLineItem, removeLineItem } from './cart.service';
import { getTokenFromStorage } from '../lib/utils/getLocalStorageToken';
import { ProductListItem } from '../lib/types';

export async function getCart() {
  const token = await getTokenFromStorage();

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

export async function getSpecificCart(token: string) {
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

export async function sendToCart(id: string) {
  const token = await getTokenFromStorage();
  const cart = await getCart();
  const response = addLineItem(id, token, cart.data.id, cart.data.version);

  console.log(`add product ${id} to cart ${cart.data.id}`);
  return response;
}

export async function removeFromCart(id: string) {
  const token = await getTokenFromStorage();
  const cart = await getCart();
  const list = cart.data.lineItems;
  const lineItem = list.find((item: ProductListItem) => item.productId === id);
  console.log(lineItem.id);

  const response = removeLineItem(lineItem.id, token, cart.data.id, cart.data.version);

  console.log(`remove product ${id} from cart ${cart.data.id}`);
  return response;
}
