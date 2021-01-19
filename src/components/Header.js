import React from 'react'
//importing mui-components
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#ef4f4f',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar></Toolbar>
    </AppBar>
  )
}

export default Header
