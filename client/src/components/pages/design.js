import React from 'react'
import RouteContainer from '../animations/container'
import Shadow from '../animations/shadow'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  design: {
    zIndex: 101,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
})

const Design = () => {
  const classes = useStyles()
  return (
    <RouteContainer className={classes.design}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item style={{ height: 60, width: '100%' }} />
        <Shadow style={{ height: 80, width: '100%' }}>
          <Grid
            item
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ height: 80 }}
            spacing={3}
          >
            <Grid item></Grid>
          </Grid>
        </Shadow>
      </Grid>
    </RouteContainer>
  )
}

export default Design
