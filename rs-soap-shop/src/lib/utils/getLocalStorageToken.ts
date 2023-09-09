export function getTokenFromStorage() {
  const isLoggedIn = !!localStorage.getItem('token');
  console.log('is loggedIn = '+ isLoggedIn);
  const token = isLoggedIn ? JSON.parse(localStorage.getItem('token')).access_token : localStorage.getItem('anonimousToken');
  console.log('token is ' + token);
  return token;
}
