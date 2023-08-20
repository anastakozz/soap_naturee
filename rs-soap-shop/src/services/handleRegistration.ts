import { RegistrationData, ResultProps } from '../lib/interfaces'
import { createCustomer } from './registration.service'

const countryId = {
  Italy: 'IT',
  Spain: 'ES',
  Germany: 'DE'
}

function dataAdapter(data: RegistrationData): RegistrationData {
  try {
    const billingKey = data.billingAddress.country as keyof typeof countryId
    const shippingKey = data.shippingAddress.country as keyof typeof countryId

    data.billingAddress.country = countryId[billingKey]
    data.shippingAddress.country = countryId[shippingKey]
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function handleRegistration(data: RegistrationData): Promise<ResultProps> {
  const dataAdapted = dataAdapter(data)
  const result = await createCustomer(dataAdapted)
  return result
}
