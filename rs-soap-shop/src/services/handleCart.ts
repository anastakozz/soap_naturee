import { getActiveCart, createCart, updateCart } from './cart.service';
import { getTokenFromStorage } from '../lib/utils/getLocalStorageToken';

export async function getCartId() {
  const token = getTokenFromStorage();
  let cartId = '';

  try {
    const cart = await getActiveCart(token);
    cartId = cart.data.id;
    console.log('got active cart')
  } catch(e) {
    console.log(e);
    console.log('no active cart')
    try {
      const cart = await createCart(token);
      cartId = cart.data.id;
      updateCart(token, cartId, cart.data.version);
      console.log('created new cart')
    } catch (err) {
      console.log(err);
    }
  }
  console.log(cartId);
  return cartId;
}
