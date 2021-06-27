import React from 'react'
import IntroSection from './IntroSection'
import AboutOrizon from './AboutOrizon'
import ProductAndServices from './Product_Services'
import Contact from './ContactSection'

function PageContent () {
  return (
    <main>
      <IntroSection />
      <AboutOrizon />
      <ProductAndServices />
      <Contact />
    </main>
  )
}

export default PageContent
