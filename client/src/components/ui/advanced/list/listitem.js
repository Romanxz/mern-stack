import React from 'react'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  item: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: 70,
    border: `1px inset ${theme.palette.border}`,
  },
}))

const ListItem = props => {
  const classes = useStyles()
  return <Grid item className={classes.item} />
}

export default ListItem
