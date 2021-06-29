
export const fetchAuthDetails = {
  serverUrl: 'http://localhost:8000',
  authorizationUrl: 'https://github.com/login/oauth/authorize',
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
}
