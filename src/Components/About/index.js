import React from 'react'
import About from './About'
import { AuthContextProvider } from '../../Context'

const AboutUser = () => {
  return (
    <AuthContextProvider>
      <About />
    </AuthContextProvider>
  )
}

export default AboutUser
