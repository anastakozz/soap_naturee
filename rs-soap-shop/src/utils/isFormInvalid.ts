import { InputErrorObject } from '../components/interfaces'

export const isFormInvalid = (err: InputErrorObject) => {
  if (Object.keys(err).length > 0) return true
  return false
}
