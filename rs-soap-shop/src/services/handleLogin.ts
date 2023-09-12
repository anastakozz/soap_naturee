import { getToken, login } from './login.service';

export default async function handleLogin(email: string, password: string) {
  try {
    const resp = await getToken(email, password);
    console.log(resp.data);
    const authData = resp.data;
    localStorage.setItem('token', JSON.stringify(authData));
    localStorage.setItem('tokenRefresh', authData.refresh_token);
    login(email, password).then(response => {
      const userData = response.data;
      localStorage.setItem('user', JSON.stringify(userData));
    });
  } catch (err) {
    console.error(err);
  }
}
