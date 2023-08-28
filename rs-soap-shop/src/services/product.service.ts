import { apiUrl, projectKey } from '../lib/constants';
import { getBasicToken } from './registration.service';
import axios from 'axios';
import { cardsPerPage } from '../lib/enums';

export async function getProductsList(limit: cardsPerPage) {
  const accessToken = await getBasicToken();
  try {
    const response = await axios.get(`${apiUrl}/${projectKey}/product-projections/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        limit: limit
      }
    });
    return response.data.results;
  } catch (error) {
    return undefined;
  }
}

export async function getProductByKey(key: string) {
  const accessToken = await getBasicToken()
  try {
    const response = await axios.get(`${apiUrl}/${projectKey}/product-projections/key=${key}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error) {
    return undefined
  }
}

export async function getProductsOfCategory(id: string) {
  const accessToken = await getBasicToken();
  try {
    const response = await axios.get(
      `${apiUrl}/${projectKey}/product-projections/search?filter=categories.id:"${id}"`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response.data.results;
  } catch (error) {
    return undefined;
  }
}

