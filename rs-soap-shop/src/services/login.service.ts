import axios from 'axios'

const BASE_AUTH_URL = process.env.REACT_APP_CTP_AUTH_URL
const BASE_URL = process.env.REACT_APP_CTP_API_URL

const clientID = process.env.REACT_APP_CTP_CLIENT_ID
const projectKey = process.env.REACT_APP_CTP_PROJECT_KEY
const secret = process.env.REACT_APP_CTP_CLIENT_SECRET

const HEADERS = {
  Authorization: 'Basic ' + btoa(`${clientID}:${secret}`),
  'Content-Type': 'application/x-www-form-urlencoded'
}

export function getToken(username: string, password: string) {
  return axios.post(
    `${BASE_AUTH_URL}/oauth/${projectKey}/customers/token?grant_type=password`,
    { username, password },
    { headers: HEADERS }
  )
}

export function login(email: string, password: string) {
  const token = JSON.parse(localStorage.getItem('token')).access_token

  return axios.post(
    `${BASE_URL}/${projectKey}/login`,
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
    `${BASE_AUTH_URL}/oauth/${projectKey}/customers/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
    {},
    { headers: HEADERS }
  )
}
