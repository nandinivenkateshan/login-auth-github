import React, { useState, useContext } from 'react'
import OAuth2Login from 'react-simple-oauth2-login'
import '../../assets/css/login.scss'
import { AuthContext } from '../../Context'
import { fetchUrl } from '../../config'
import { login } from '../../actions'

const LoginGitHub = () => {
  const { state, dispatch } = useContext(AuthContext)
  const { client_id, redirect_uri } = state

  const fetchAccessToken = async (params) => {
    const response = await window.fetch(`${fetchUrl.server}/getAccessToken`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    console.log('result', result)
    if (result) {
      window.open(`${result.html_url}?tab=repositories`)
      const payload = { user: result, isLoggedIn: true }
      dispatch(login(payload))
    }
  }

  const handleSuccess = response => {
    console.log('response', response)
    const code = response.code
    const input = { client_id, redirect_uri, code }
    fetchAccessToken(input)
  }

  const handleFailure = response => {
    console.error(response, 'response error')
  }

  return (
    <OAuth2Login
      authorizationUrl={fetchUrl.gitAuth}
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
