import { RegistrationData, ResultProps } from '../lib/interfaces'
import { createCustomer } from './registration.service'

const testData: Partial<RegistrationData> = {
  email: '26@2.com',
  firstName: 'A',
  secondName: 'A',
  password: 'lalala',
  date: '1950-09-09',
  billingAddress: {
    country: 'DE',
    city: 'Milan',
    street: 'AAA',
    house: '111',
    postalCode: '111',
    isDefault: false
  },
  shippingAddress: {
    country: 'DE',
    city: 'Milan',
    street: 'AAA',
    house: '111',
    postalCode: '111',
    isDefault: true
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
  const data = dataAdapter(testData)
  const result = await createCustomer(data)
  return result
}
