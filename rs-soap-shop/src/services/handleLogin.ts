import { getToken, login } from './login.service'

export default function handleLogin(email: string, password: string) {
  getToken(email, password)
    .then(resp => {
      console.log(resp.data)
      const authData = resp.data
      localStorage.setItem('token', JSON.stringify(authData))
      login(email, password).then(resp => {
        const userData = resp.data
        localStorage.setItem('user', JSON.stringify(userData))
      })
    })
    .catch(err => {
      console.error(err)
    })
}
