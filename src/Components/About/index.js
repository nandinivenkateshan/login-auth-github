import React, { useContext } from 'react'
import '../../assets/css/about.scss'
import { Redirect } from 'react-router-dom'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import { AuthContext } from '../../Context'

const About = () => {
  const { state } = useContext(AuthContext)
  const { isLoggedIn, user } = state
  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <section className='about-container'>
      <article className='about-container-profile-header'>
        <img src={user.avatar_url} alt='profile_pic' className='about-container-pic' />
        <article className='about-container-name'>
          <h1 className='about-container-username'>{user.name}</h1>
          <h5 className='about-container-login-name'>{user.login}</h5>
        </article>
      </article>

      <article>
        <p>Hey! I am using Github</p>
        <h4>{user.bio}</h4>
        <article>
          {user.email &&
            <a href={`mailto:${user.email}`} className='blog-link about-container-mail'>
              <MailOutlineOutlinedIcon />
              <span className='about-container-mail--margin'> Sign in to view mail</span>
            </a>}
        </article>
        <a href={user.blog} className='blog-link'>{user.blog}</a>
        <article className='repo-details'>
          <article className='followers repo-details-sec'>
            <p className='followers-icon'> <GroupOutlinedIcon /></p>
            <p>{user.followers} Followers</p>
          </article>
          <p className='repo-details-sec'>
            <span>{user.following} Following </span>
          </p>
        </article>
      </article>
    </section>
  )
}

export default About
