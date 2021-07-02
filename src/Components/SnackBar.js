import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { AuthContext } from '../Context'
import { closeSnackBar } from '../actions'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

export default function CustomizedSnackbars (prop) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const { state, dispatch } = useContext(AuthContext)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(closeSnackBar())
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        key={'top' + 'center'}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity='success'>
          {state.snackMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
