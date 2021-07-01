import { Link, animateScroll as scroll } from 'react-scroll'
import { useHistory, useLocation } from 'react-router-dom'

const ScrollLink = ({ class_name, name, id, onHandleMenuClick }) => {
  const location = useLocation()
  const history = useHistory()
  const scrollToTop = () => {
    const path = location.pathname
    if (path === '/about') {
      history.push('/')
    }
    scroll.scrollToTop()
    if (onHandleMenuClick) onHandleMenuClick()
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
