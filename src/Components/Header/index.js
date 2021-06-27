import React from 'react'
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
  }

}))

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = () => {
    setAnchorEl(null)
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
                  <MenuItem onClick={handleMenuClick}>Services</MenuItem>
                  <MenuItem onClick={handleMenuClick}>Product</MenuItem>
                  <MenuItem onClick={handleMenuClick}>Technology</MenuItem>
                  <MenuItem onClick={handleMenuClick}>About</MenuItem>
                  <MenuItem onClick={handleMenuClick}>Client</MenuItem>
                  <MenuItem onClick={handleMenuClick}>Login</MenuItem>
                </Menu>
              </div>)
            : (
              <div className={classes.headerOptions}>
                <Typography className={classes.headerLabels}>
                  <Link color='inherit'>Services</Link>
                  <Link color='inherit'>Product</Link>
                  <Link color='inherit'>Technology</Link>
                  <Link color='inherit'>About</Link>
                  <Link color='inherit'>Client</Link>
                  <Link color='inherit' to='login' component={RouterLink}>Login</Link>
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
