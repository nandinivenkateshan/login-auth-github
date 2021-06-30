
export const fetchAuthDetails = {
  serverUrl: 'https://github-login-auth.herokuapp.com',
  authorizationUrl: 'https://github.com/login/oauth/authorize',
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
}
