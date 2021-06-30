import React, { useContext, useState } from 'react'
import OAuth2Login from 'react-simple-oauth2-login'
import '../../assets/css/login.scss'
import { AuthContext } from '../../Context'
import { fetchAuthDetails } from '../../config'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'

const LoginGitHub = () => {
  const { dispatch } = useContext(AuthContext)
  const { client_id, redirect_uri, authorizationUrl, serverUrl } = fetchAuthDetails
  const [isErr, setError] = useState(false)

  if (isErr) {
    return <Redirect to='/err' />
  }

  const fetchAccessToken = async (params) => {
    try {
      const response = await window.fetch(`${serverUrl}/getAccessToken`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      if (result) {
        window.open(`${result.html_url}?tab=repositories`)
        const payload = { user: result, isLoggedIn: true }
        dispatch(login(payload))
      }
    } catch {
      setError(true)
    }
  }

  const handleSuccess = response => {
    const code = response.code
    const input = { client_id, redirect_uri, code }
    fetchAccessToken(input)
  }

  const handleFailure = response => {
    console.error(response, 'response error')
  }

  return (
    <OAuth2Login
      authorizationUrl={authorizationUrl}
      responseType='code'
      clientId={client_id}
      redirectUri={redirect_uri}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      className='login-btn'
    />
  )
}

export default LoginGitHub
