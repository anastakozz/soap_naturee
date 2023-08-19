import { RegistrationData, Address, ResultProps } from '../lib/interfaces'
import { createCustomer, setDateOfBirth } from './apiUtils'

const testData: Partial<RegistrationData> = {
  email: '333@333.com',
  firstName: 'Jacky',
  secondName: 'Chan',
  password: 'lalala',
  date: '1950-09-09'
}

export async function handleRegistration(): Promise<ResultProps> {
  const result = await createCustomer(testData)

  if (result.isSuccess) {
    const newClientId = result.message
    await setDateOfBirth(newClientId, testData)
  }
  return result
}
