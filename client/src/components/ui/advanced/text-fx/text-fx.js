import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Appear from '../../../animations/appear'
import Slice from './effects/slice'
import Glitch from './effects/glitch'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    height: props => props.size,
    fontSize: props => props.size,
    [theme.breakpoints.only('lg')]: {
      height: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*90)`
          : `calc(${props.size}px/100*90)`,
      fontSize: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*90)`
          : `calc(${props.size}px/100*90)`,
    },
    [theme.breakpoints.only('md')]: {
      height: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*70)`
          : `calc(${props.size}px/100*80)`,
      fontSize: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*70)`
          : `calc(${props.size}px/100*80)`,
    },
    [theme.breakpoints.only('sm')]: {
      height: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*70)`
          : `calc(${props.size}px/100*70)`,
      fontSize: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*70)`
          : `calc(${props.size}px/100*70)`,
    },
    [theme.breakpoints.only('xs')]: {
      height: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*50)`
          : `calc(${props.size}px/100*60)`,
      fontSize: props =>
        props.noresponse
          ? `${props.size}`
          : props.header
          ? `calc(${props.size}px/100*50)`
          : `calc(${props.size}px/100*60)`,
    },
    whiteSpace: 'nowrap',
    color: props => (props.color ? props.color : theme.palette.secondary.main),
    zIndex: 100,
    filter: 'saturate(1200%)',
  },
  puretext: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
  },
}))

const TextFX = ({
  appear,
  data,
  glitch,
  slice,
  shadow,
  children,
  ...props
}) => {
  const [isHovered, toggleHover] = useState(false)
  const classes = useStyles(props)
  const { header } = props
  const { container, puretext } = classes
  return (
    <Appear
      direction={appear}
      className={container}
      {...props}
      data-text={data ? data : children}
    >
      <div
        className={container}
        style={{ zIndex: 100, filter: 'saturate(100%)', height: '100%' }}
        onMouseMove={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        {header || glitch ? (
          <Glitch
            isHovered={isHovered}
            break={props.break}
            flexstart={props.flexstart}
          >
            {children}
          </Glitch>
        ) : (
          <div className={puretext}>{children}</div>
        )}
        {header || slice ? (
          <Slice
            shadow={header || shadow}
            break={props.break}
            flexstart={props.flexstart}
          >
            {children}
          </Slice>
        ) : (
          <div className={puretext}>{children}</div>
        )}
      </div>
    </Appear>
  )
}

export default TextFX
