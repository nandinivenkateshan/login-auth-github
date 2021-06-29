import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PageContent from './Components/PageContent'
import { AuthContextProvider} from './Context'

const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <PageContent />
      <Footer />
    </AuthContextProvider>
  )
}

export default App
