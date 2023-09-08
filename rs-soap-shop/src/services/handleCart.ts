import { getActiveCart, createCart, updateCart } from './cart.service';

export async function getCartId() {
  const isLoggedIn = !!localStorage.getItem('token');
  let cartId = '';
  if (isLoggedIn) {
    const token = JSON.parse(localStorage.getItem('token')).access_token;
    try {
      const cart = await getActiveCart(token);
      cartId = cart.data.id;
    } catch {
      console.log('no active Cart');
      try {
        const cart = await createCart(token);
        cartId = cart.data.id;
        updateCart(token, cartId, cart.data.version);
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    console.log('need to create anonimous cart');
  }
  return cartId;
}
