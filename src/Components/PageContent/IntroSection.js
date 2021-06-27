import React from 'react'
import introLogo from '../../assets/images/img1.svg'
import '../../assets/css/pageContent.scss'
import ReadMoreBtn from './ReadMoreBtn'

function IntroSection () {
  return (
    <section className='introSection'>
      <aside className='introsection-img-container'>
        <img src={introLogo} alt='IntroLogo' className='introsection-img' />
      </aside>
      <article className='introSection-content'>
        <p className='introSection-content-heading'>
            Making the most of the ever-growing
          <span className='introSection-content-heading--color'> Information Technology</span>
        </p>
        <p className='introSection-content-para'>Managed by a team of professional experts with extensive experience and impressive track records</p>
        <ReadMoreBtn />
      </article>
    </section>
  )
}

export default IntroSection
