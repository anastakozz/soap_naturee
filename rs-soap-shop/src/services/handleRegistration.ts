import { RegistrationData, ResultProps } from '../lib/interfaces'
import { createCustomer } from './registration.service'

const testData: RegistrationData = {
  email: '999@999.com',
  firstName: 'Johnny',
  lastNAme: 'Depp',
  password: 'lalala'
}

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

const countryId = {
  Italy: 'IT',
  Spain: 'ES',
  Germany: 'DE'
}

function dataAdapter(data: RegistrationData): RegistrationData {
  const billingKey = data.billingAddress.country as keyof typeof countryId
  const shippingKey = data.shippingAddress.country as keyof typeof countryId

  data.billingAddress.country = countryId[billingKey]
  data.shippingAddress.country = countryId[shippingKey]
  return data
}

export async function handleRegistration(): Promise<ResultProps> {
  const data = dataAdapter(testData)
  const result = await createCustomer(data)
  return result
}

