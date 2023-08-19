import axios from 'axios'

const BASE_AUTH_URL = 'https://auth.europe-west1.gcp.commercetools.com'

const clientID = 'qo5oN-bfH-JUcVqaRvVydZlF'
const projectKey = 'soap-shop'
const secretAdmin = 'PUS0VIOX7B3xr5Ud5OCtrunNZOnuPvXu'

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

// POST https://{auth_host}/oauth/{projectKey}/in-store/key={storeKey}/customers/token

// grant_type=password&username={email}&password={password}&scope={scope}
//
