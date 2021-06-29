import React, { useState, useContext } from 'react'
import OAuth2Login from 'react-simple-oauth2-login'
import '../../assets/css/login.scss'
import { AuthContext } from '../../Context'
import { GIT_AUTHORIZE_URL } from '../../config'

const LoginGitHub = () => {
  const { state, dispatch } = useContext(AuthContext)
  const { client_id, redirect_uri } = state

  const fetchAccessToken = async (input) => {
    console.log('input', input)
    const response = await window.fetch('http://localhost:8000/fetchAccessToken', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    console.log('result', result)
    if (result) {
      window.open(`${result.html_url}?tab=repositories`)
      dispatch({
        type: 'LOGIN',
        payload: { user: result, isLoggedIn: true }
      })
    }
  }

  const onSuccess = response => {
    console.log('response', response)
    const input = { client_id, redirect_uri, code: response.code }
    //fetchAccessToken(input)
    // setCode(response.code)
  }
  const onFailure = response => {
    console.error(response, 'response error')
  }

  return (
    <OAuth2Login
      authorizationUrl={GIT_AUTHORIZE_URL}
      responseType='code'
      clientId={client_id}
      redirectUri={redirect_uri}
      onSuccess={onSuccess}
      onFailure={onFailure}
      className='login-btn'
    />
  )
}

export default LoginGitHub
