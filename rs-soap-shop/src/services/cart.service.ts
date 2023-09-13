import axios from 'axios';
import { apiUrl, projectKey } from '../lib/constants';
import { CartActionType } from '../lib/types';

export async function getActiveCart(token: string) {
  try {
    return axios.get(`${apiUrl}/${projectKey}/me/active-cart`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (e) {
    console.log(e);
  }
}

export async function createCart(token: string) {
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/me/carts`,
      data: { currency: 'EUR' },
      headers: { Authorization: `Bearer ${token}` }
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function addLineItem(productId: string, token: string, cartId: string, cartVersion: number) {
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/me/carts/${cartId}`,
      data: {
        version: cartVersion,
        actions: [
          {
            action: 'addLineItem',
            productId: `${productId}`,
            quantity: 1
          }
        ]
      },
      headers: { Authorization: `Bearer ${token}` }
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function removeLineItem(lineItemId: string, token: string, cartId: string, cartVersion: number) {
  console.log(lineItemId);
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/me/carts/${cartId}`,
      data: {
        version: cartVersion,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId
          }
        ]
      },
      headers: { Authorization: `Bearer ${token}` }
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function updateCart(token: string, cartId: string, cartVersion: number) {
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/me/carts/${cartId}`,
      data: {
        version: cartVersion,
        actions: [
          {
            action: 'setCountry',
            country: 'DE'
          }
        ]
      },
      headers: { Authorization: `Bearer ${token}` }
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export function updateProductInCart(token: string, id: string, actions: CartActionType[], version: number) {
  try {
    return axios.post(
      `${apiUrl}/${projectKey}/me/carts/${id}`,
      { version, actions },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
}

export function deleteCart(token: string, id: string, version: number) {
  try {
    return axios.delete(`${apiUrl}/${projectKey}/me/carts/${id}?version=${version}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (e) {
    console.log(e);
  }
}
