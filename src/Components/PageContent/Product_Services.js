import React from 'react'
import productLogo from '../../assets/images/product_services/img1.svg'
import servicesLogo from '../../assets/images/product_services/img2.svg'
import technologyLogo from '../../assets/images/product_services/img3.svg'
import ReadMoreBtn from './ReadMoreBtn'
import '../../assets/css/pageContent.scss'

function ProductAndServices () {
  return (
    <section className='product-services-page'>
      <h2 className='product-services-page-heading'>Product and Services</h2>
      <section className='product-services-page-col-container'>
        <article className='product-services-page-col'>
          <img src={productLogo} alt='image' className='product-services-page-logo' />
          <p className='product-services-page-col-heading'>Our Product</p>
          <p className='product-services-page-col-para'>
            Our product is made on the base of our team’s
            careful research and analyses,
            ranging from internet based application.
          </p>
          <ReadMoreBtn />
        </article>
        <article className='product-services-page-col'>
          <img src={servicesLogo} alt='image' className='product-services-page-logo' />
          <p className='product-services-page-col-heading'>Our Service</p>
          <p className='product-services-page-col-para'>
            DSI’s shared service solutions focus on the front-end based software development,
            designed specifically for the banking and financial sectors.
          </p>
          <ReadMoreBtn />
        </article>
        <article className='product-services-page-col'>
          <img src={technologyLogo} alt='image' className='product-services-page-logo' />
          <p className='product-services-page-col-heading'>Our Technology</p>
          <p className='product-services-page-col-para'>
            First JAVA, runs on more than 850 million personal computers worldwide,
            and on billions of devices worldwide, including mobile and TV devices.
          </p>
          <ReadMoreBtn />
        </article>
      </section>
    </section>
  )
}

export default ProductAndServices
