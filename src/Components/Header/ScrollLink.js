import { Link, animateScroll as scroll } from 'react-scroll'

const ScrollLink = ({ class_name, name, id }) => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Link
      color='inherit' className={class_name}
      activeClass='active'
      to={id}
      spy
      smooth
      offset={-70}
      duration={500}
      component={ScrollLink}
      onClick={scrollToTop}
    >{name}
    </Link>
  )
}

export default ScrollLink
