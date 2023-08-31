import axios from 'axios';
import { apiUrl, projectKey } from '../lib/constants';

export function getAccountData() {
  try {
    return axios.get(`${apiUrl}/${projectKey}/me`, {
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')).access_token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  } catch (e) {
    console.log(e);
  }
}
