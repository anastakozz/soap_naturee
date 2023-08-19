import { RegistrationData, ResultProps } from '../lib/interfaces'
import { createCustomer} from './registration.service.ts'

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

export async function handleRegistration(): Promise<ResultProps> {
  const result = await createCustomer(testData)
  return result
}

