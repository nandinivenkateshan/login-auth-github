import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

import { AuthContextProvider } from './Context'

const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  )
}

export default App
