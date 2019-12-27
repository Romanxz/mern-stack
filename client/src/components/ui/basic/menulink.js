import React, { useState } from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menulink: {
    zIndex: 100,
    position: 'relative',
    display: 'flex',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 60,
    width: 60,
    borderRadius: '50%',
    background: 'inherit',
    color: 'inherit',
  },
  menulinkicon: {
    position: 'relative',
    display: 'flex',
    background: theme.palette.secondary.dark,
    filter: 'saturate(1000%)',
    top: -2,
    left: 0,
    width: 30,
    height: 3,
    marginTop: 4,
    // borderRadius: 3,
  },
  frame: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    userSelect: 'none',
    background: 'transparent',
    justifyContent: 'center',
    boxSizing: 'border-box',
    transition: 'all 0.4s',
    height: 60,
    width: 60,
    borderRadius: '50%',
    cursor: 'pointer',
    '&::before': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 40,
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      border: `2px inset ${theme.palette.secondary.main}`,
      borderRadius: '50%',
      opacity: 1,
      filter: 'blur(5px)',
    },
    '&::after': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 40,
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      border: `1px double ${theme.palette.secondary.dark}`,
      borderRadius: '50%',
      opacity: 1,
      filter: 'saturate(2000%)',
    },
  },
}))

const Menulink = props => {
  const classes = useStyles()
  const [toggleHover, isHovered] = useState(false)
  return (
    <Button
      glowoff
      className={classes.menulink}
      style={props.style}
      onMouseMove={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div className={classes.frame} style={{ opacity: isHovered ? 1 : 0 }} />
      <Link className={classes.menulink} style={props.style} to={props.to}>
        <>
          <div className={classes.menulinkicon} />
          <div className={classes.menulinkicon} />
          <div className={classes.menulinkicon} />
        </>
      </Link>
    </Button>
  )
}

export default Menulink
