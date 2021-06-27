import React from 'react'
import aboutLogo from '../../assets/images/img2.svg'
import '../../assets/css/pageContent.scss'

function AboutOrizon () {
  return (
    <main className='container--grey-background'>
      <section className='about-page'>
        <article className='about-page-img-container'>
          <img src={aboutLogo} alt='image' className='about-page-img' />
        </article>
        <aside className='about-page-content'>
          <h1 className='about-page-content-heading'>
             Welcome to
            <span className='about-page-content-heading--color'> Orizon
              <span className='about-page-content-heading--nextline'>Technologies</span>
            </span>
          </h1>
          <p className='about-page-content-para'>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders,
            who each of them has a common end objective to innovate new creations by making
            the most of the ever-growing information technology through DSI’s distinct front-end
            based application concept.
          </p>
          <p className='about-page-content-para about-page-content-para--gap'>
            Managed by a team of professional experts with extensive experience and impressive track records,
            DSI believes that continuous improvements and innovations assure your business to run effectively
            and efficiently.
          </p>
        </aside>
      </section>
    </main>
  )
}

export default AboutOrizon
