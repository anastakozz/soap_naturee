import axios, { AxiosError } from 'axios'
import { RegistrationData, ResultProps } from '../lib/interfaces'

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

export async function createCustomer(data: Partial<RegistrationData>): Promise<ResultProps> {
  const billingDefaultIndex = data.billingAddress.isDefault ? 0 : undefined
  const shippingDefaultIndex = data.shippingAddress.isDefault ? 1 : undefined
  
  try {
    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${projectKey}/customers`,
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.secondName,
        password: data.password,
        dateOfBirth: data.date,
        addresses: [
          {
            country: data.billingAddress.country,
            city: data.billingAddress.city,
            streetName: data.billingAddress.street,
            postalCode: data.billingAddress.postalCode,
            building: data.billingAddress.house
          },
          {
            country: data.shippingAddress.country,
            city: data.shippingAddress.city,
            streetName: data.shippingAddress.street,
            postalCode: data.shippingAddress.postalCode,
            building: data.shippingAddress.house
          }
        ],
        billingAddresses: [0],
        shippingAddresses: [1],
        defaultBillingAddress: billingDefaultIndex,
        defaultShippingAddress: shippingDefaultIndex
      },
      headers: { Authorization: `Bearer ${accessKey}` }
    })
    return { isSuccess: true, message: response.data.customer.id }
  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError) {
      return { isSuccess: false, message: error.response.data.message }
    }
  }
}

