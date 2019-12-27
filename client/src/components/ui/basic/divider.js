import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Shadow from '../../animations/shadow'

const useStyle = makeStyles(theme => ({
  divider: {
    width: props => (props.width ? props.width : '100%'),
    height: props => (props.height ? props.height : 1),
    position: 'relative',
    display: 'flex',
    background: 'transparent',
  },
}))

export const Divider = props => {
  const classes = useStyle(props)
  return <Shadow className={classes.divider} />
}

export default Divider
