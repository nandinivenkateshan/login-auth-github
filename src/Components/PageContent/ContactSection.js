import React from 'react'
import logo from '../../assets/images/logo.svg'
import img1 from '../../assets/images/contact/img1.svg'
import img2 from '../../assets/images/contact/img2.svg'
import img3 from '../../assets/images/contact/img3.svg'
import img4 from '../../assets/images/contact/img4.svg'
import img5 from '../../assets/images/contact/img5.svg'
import img6 from '../../assets/images/contact/img6.svg'
import '../../assets/css/pageContent.scss'

function ContactSection () {
  return (
    <section className='contact-page'>
      <article className='contact-page-col1'>
        <p className='contact-page-col1-logo'>
          <img src={logo} alt='Logo' className='contact-page-col1-logo-pic' />
          <label className='contact-page-col1-logo-lable'>ORIZON</label>
        </p>
        <p className='contact-page-col1-heading'>
        Orizon Technologies Ltd
        </p>
        <p className='contact-page-col1-para'>
            Ruko Jalur Sutera 29A No. 53
        </p>
        <p className='contact-page-col1-para'>
            Alam Sutera Serpong, Tangerang 15323
        </p>
      </article>
      <article className='contact-page-col2'>
        <p className='contact-page-col2-heading'>Contact</p>
        <p className='contact-page-col2-para'>
          Phone : +62.21.5314.1135
        </p>
        <p className='contact-page-col2-para'>Fax : +62.21.5314.1135</p>
        <p className='contact-page-col2-para'>Email : community@orizon.com</p>
      </article>
      <article className='contact-page-col3'>
        <section>
          <img src={img1} alt='image' className='contact-page-col3-img contact-page-col3-img1 ' />
          <img src={img2} alt='image' className='contact-page-col3-img contact-page-col3-img2' />
          <img src={img3} alt='image' className='contact-page-col3-img contact-page-col3-img3' />
        </section>
        <section>
          <img src={img4} alt='image' className='contact-page-col3-img contact-page-col3-img4' />
          <img src={img6} alt='image' className='contact-page-col3-img contact-page-col3-img6' />
          <img src={img5} alt='image' className='contact-page-col3-img contact-page-col3-img5' />
        </section>
      </article>
    </section>
  )
}

export default ContactSection
