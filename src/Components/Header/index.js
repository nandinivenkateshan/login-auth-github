import React, { useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined'
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined'
import Logo from '../Logo'
import Login from '../Login'
import { AuthContext } from '../../Context'
import { logout } from '../../actions'
import ScrollLink from './ScrollLink'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around'
  },
  headerLabels: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    cursor: 'pointer',
    'font-family': 'Roboto',
    'font-size': '18px',
    'font-style': 'normal',
    'font-weight': '400'

  },
  headerIcons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '20px',
    cursor: 'pointer'
  },
  active: {
    '&:focus': {
      color: 'rgb(53, 58, 8)',
      background: 'rgb(214, 201, 201)'
    }
  }

}))

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { state, dispatch } = useContext(AuthContext)
  const { isLoggedIn } = state

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Logo />
          </Typography>
          {isMobile
            ? (
              <div>
                <IconButton
                  edge='start' className={classes.menuButton} color='inherit' aria-label='menu'
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={handleMenuClick}
                >
                  <MenuItem onClick={handleMenuClick} className={classes.active}>
                    <ScrollLink id='product-services' name='Services' />
                  </MenuItem>
                  <MenuItem onClick={handleMenuClick} className={classes.active}>
                    <ScrollLink id='product-services' name='Product' />
                  </MenuItem>
                  <MenuItem onClick={handleMenuClick} className={classes.active}>
                    <ScrollLink id='technology' name='Technology' />
                  </MenuItem>
                  {isLoggedIn &&
                    <MenuItem onClick={handleMenuClick} to='/about' component={RouterLink} className={classes.active}>About</MenuItem>}
                  <MenuItem onClick={handleMenuClick} className={classes.active}>
                    <ScrollLink id='contact' name='Client' />
                  </MenuItem>
                  {isLoggedIn
                    ? <MenuItem color='inherit' onClick={handleLogout} component={RouterLink} className={classes.active}>LogOut</MenuItem>
                    : (
                      <MenuItem>
                        <Login />
                      </MenuItem>)}
                </Menu>
              </div>)
            : (
              <div className={classes.headerOptions}>
                <Typography className={classes.headerLabels}>
                  <ScrollLink id='product-services' class-name='classes.active' name='Services' />
                  <ScrollLink id='product-services' class-name='classes.active' name='Product' />
                  <ScrollLink id='technology' class-name='classes.active' name='Technology' />
                  {isLoggedIn &&
                    <Link color='inherit' to='/about' component={RouterLink} className={classes.active}>About</Link>}
                  <ScrollLink id='contact' class-name='classes.active' name='Client' />
                  {isLoggedIn
                    ? <Link color='inherit' onClick={handleLogout} className={classes.active}>LogOut</Link>
                    : <Login />}
                </Typography>
                <section className={classes.headerIcons}>
                  <HomeIcon />
                  <MailOutlinedIcon />
                  <ShuffleOutlinedIcon />
                </section>
              </div>)}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
