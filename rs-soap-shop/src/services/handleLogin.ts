import { getToken, login } from './login.service';
import { tokenNames } from '../lib/enums';
const { userToken, userTokenRefresh } = tokenNames;

export default async function handleLogin(email: string, password: string) {
  try {
    const resp = await getToken(email, password);
    console.log(resp.data);
    const authData = resp.data;
    localStorage.setItem(`${userToken}`, JSON.stringify(authData));
    localStorage.setItem(`${userTokenRefresh}`, authData.refresh_token);
    login(email, password).then(response => {
      const userData = response.data;
      localStorage.setItem('user', JSON.stringify(userData));
    });
  } catch (err) {
    console.error(err);
  }
}
