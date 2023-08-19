import axios, { AxiosError } from 'axios'
import { RegistrationData, Address, ResultProps } from '../lib/interfaces'

const authUrl = process.env.REACT_APP_CTP_AUTH_URL
const apiUrl = process.env.REACT_APP_CTP_API_URL
const projectKey = process.env.REACT_APP_CTP_PROJECT_KEY
const clientId = process.env.REACT_APP_CTP_CLIENT_ID
const secret = process.env.REACT_APP_CTP_CLIENT_SECRET
const accessKey = await getBasicToken()

export async function getBasicToken() {
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

export async function getCustomers() {
  return await axios({
    method: 'get',
    url: `${apiUrl}/${projectKey}/customers`,
    headers: { Authorization: `Bearer ${accessKey}` }
  })
}

export async function createCustomer(data: Partial<RegistrationData>): Promise<ResultProps> {
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/customers`,
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.secondName,
        password: data.password
      },
      headers: { Authorization: `Bearer ${accessKey}` }
    })
    return { isSuccess: true, message: response.data.customer.id }
  } catch (error) {
    if (error instanceof AxiosError) {
      return { isSuccess: false, message: error.response.data.message }
    }
  }
}

export async function setDateOfBirth(id: string, data: Partial<RegistrationData>) {
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/customers/${id}`,
      data: {
        version: 1,
        actions: [
          {
            action: 'setDateOfBirth',
            dateOfBirth: data.date
          }
        ]
      },
      headers: { Authorization: `Bearer ${accessKey}` }
    })
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

// async function setShippingAddress(id: string, data: Partial<RegistrationData>) {
// }

export async function getCustomerToken(username: string, password: string) {
  const response: void = await axios({
    method: 'post',
    url: `${authUrl}/oauth/${projectKey}/customers/token?grant_type=password&username=${username}&password=${password}`,
    headers: {
      Authorization: 'Basic ' + btoa(`${clientId}:${secret}`)
    }
  })
  console.log(response)
}
