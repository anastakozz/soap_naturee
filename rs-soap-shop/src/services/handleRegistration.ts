import axios from 'axios'

// interface RegistrationData {
//   email: string
//   firstName: string
//   lastNAme: string
//   password: string
// }

const authUrl = process.env.REACT_APP_CTP_AUTH_URL
const apiUrl = process.env.REACT_APP_CTP_API_URL
const projectKey = process.env.REACT_APP_CTP_PROJECT_KEY
const clientId = process.env.REACT_APP_CTP_CLIENT_ID
const secret = process.env.REACT_APP_CTP_CLIENT_SECRET
const accessKey = await getBasicToken()

async function getBasicToken() {
  try {
    const response = await axios({
      method: 'post',
      url: `${authUrl}/oauth/token?grant_type=client_credentials`,
      headers: {
        Authorization: 'Basic ' + btoa(`${clientId}:${secret}`)
      }
    })
    return response.data.access_token
  } catch (error) {
    console.error(error)
  }
}

async function getCustomers() {
  return await axios({
    method: 'get',
    url: `${apiUrl}/${projectKey}/customers`,
    headers: { Authorization: `Bearer ${accessKey}` }
  })
}

async function createCustomer() {
  return await axios({
    method: 'post',
    url: `${apiUrl}/${projectKey}/customers`,
    data: {
      email: '333@333.com',
      firstName: 'Hey',
      lastName: 'Joe',
      password: 'olala'
    },
    headers: { Authorization: `Bearer ${accessKey}` }
  })
}

async function getCustomerToken(username: string, password: string) {
  const response = await axios({
    method: 'post',
    url: `${authUrl}/oauth/${projectKey}/customers/token?grant_type=password&username=${username}&password=${password}`,
    headers: {
      Authorization: 'Basic ' + btoa(`${clientId}:${secret}`)
    }
  })
  console.log(response)
}

export async function handleRegistration() {
  getBasicToken()
}
