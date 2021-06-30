import React from 'react'
import Footer from './Footer'
import PageContent from './PageContent'
import About from './About'
import { useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <>
      {path === '/about'
        ? <About />
        : (
          <>
            <PageContent />
            <Footer />
          </>)}
    </>
  )
}
export default Main
