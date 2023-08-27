import axios from 'axios'
import { apiUrl, projectKey } from '../lib/constants'

const HEADERS = {
  Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')).access_token,
  'Content-Type': 'application/x-www-form-urlencoded'
}

export function getAccountData() {
  return axios.get(`${apiUrl}/${projectKey}/me`, { headers: HEADERS })
}
