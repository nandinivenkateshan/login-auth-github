import React from 'react'
import logo from '../../assets/images/logo.svg'
import '../../assets/css/logo.scss'

const Logo = () => {
  return (
    <section className='header-logo-template'>
      <img src={logo} alt='logo' />
      <label className='header-logo-label'>ORIZON</label>
    </section>
  )
}

export default Logo
