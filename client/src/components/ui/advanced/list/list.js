import React from 'react'
import Shadow from '../../../animations/shadow'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles } from '@material-ui/styles'
import ListItem from './listitem'
import Spacer from '../../basic/spacer'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '80%',
    height: 300,
    background: theme.palette.shadow,
    // border: '1px solid red',
  },
}))

const List = props => {
  const classes = useStyles()
  return (
    <Shadow className={classes.container}>
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        style={{ width: '100%', padding: 8 }}
      >
        <ListItem />
        <Spacer size={1} />
        <ListItem />
      </Grid>
    </Shadow>
  )
}

export default List
