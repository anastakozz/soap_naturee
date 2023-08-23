import axios from 'axios'
import { apiUrl, authUrl, projectKey, clientId, secret } from '../lib/constants'

const HEADERS = {
  Authorization: 'Basic ' + btoa(`${clientId}:${secret}`),
  'Content-Type': 'application/x-www-form-urlencoded'
}

export function getToken(username: string, password: string) {
  return axios.post(
    `${authUrl}/oauth/${projectKey}/customers/token?grant_type=password`,
    { username, password },
    { headers: HEADERS }
  )
}

export function login(email: string, password: string) {
  const token = JSON.parse(localStorage.getItem('token')).access_token

  return axios.post(
    `${apiUrl}/${projectKey}/login`,
    { email, password },
    {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
  )
}

export function refreshToken() {
  const refreshToken = JSON.parse(localStorage.getItem('token')).refresh_token
  return axios.post(
    `${authUrl}/oauth/${projectKey}/customers/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
    {},
    { headers: HEADERS }
  )
}
