import axios from 'axios'

const BASE_AUTH_URL = process.env.REACT_APP_CTP_AUTH_URL

const clientID = process.env.REACT_APP_CTP_CLIENT_ADMIN_ID
const projectKey = process.env.REACT_APP_CTP_PROJECT_KEY
const secretAdmin = process.env.REACT_APP_CTP_ADMIN_SECRET

const HEADERS = {
  Authorization: 'Basic ' + btoa(`${clientID}:${secretAdmin}`),
  'Content-Type': 'application/x-www-form-urlencoded'
}

function login(username: string, password: string) {
  return axios.post(
    `${BASE_AUTH_URL}/oauth/${projectKey}/customers/token?grant_type=password`,
    { username, password },
    { headers: HEADERS }
  )
}

export default login
