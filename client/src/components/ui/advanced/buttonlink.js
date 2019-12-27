import React from 'react'
import Button from '../basic/button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Label from './text-fx/variants/label'

const useStyles = makeStyles(theme => ({
  link: {
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: 'inherit',
    color: 'inherit',
  },
}))

const Buttonlink = props => {
  const classes = useStyles()
  return (
    <Button style={props.style} id={props.id}>
      <Link className={classes.link} style={props.style} to={props.to}>
        <Label uppercase>{props.children}</Label>
      </Link>
    </Button>
  )
}

export default Buttonlink
