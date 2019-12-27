import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const sliceStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}

const useStyles = makeStyles(theme => ({
  slice1: {
    ...sliceStyles,
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage: 'linear-gradient(black 30%, transparent 30%)',
    animation: '$slice1 5s infinite alternate-reverse',
  },
  slice2: {
    ...sliceStyles,
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage:
      'linear-gradient(transparent 30%, black 30%, black 50%, transparent 50%)',
    animation: '$slice2 5s infinite alternate-reverse',
  },
  slice3: {
    ...sliceStyles,
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage:
      'linear-gradient(transparent 50%, black 50%, black 70%, transparent 70%)',
    animation: '$slice3 5s infinite alternate-reverse',
  },
  slice4: {
    ...sliceStyles,
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    textShadow: props =>
      props.shadow
        ? `
     0px 0px 5px ${theme.palette.shadow},
     0px 1px 5px ${theme.palette.shadow},
     0px 2px 5px ${theme.palette.shadow},
     1px 1px 5px ${theme.palette.shadow},
     1px 2px 5px ${theme.palette.shadow},
     1px 3px 5px ${theme.palette.shadow},
     2px 2px 5px ${theme.palette.shadow},
     2px 3px 5px ${theme.palette.shadow},
     2px 4px 5px ${theme.palette.shadow}
     `
        : '',
    maskImage: 'linear-gradient(transparent 70%, black 70%)',
    animation: '$slice4 5s infinite alternate-reverse',
  },
  '@keyframes slice1': {
    '0%': {
      left: 0,
    },
    '25%': {
      left: -1,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: 1,
    },
    '100%': {
      left: 2,
    },
  },
  '@keyframes slice2': {
    '0%': {
      left: -2,
    },
    '25%': {
      left: 2,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: -2,
    },
    '100%': {
      left: 0,
    },
  },
  '@keyframes slice3': {
    '0%': {
      left: -2,
    },
    '25%': {
      left: 0,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: -2,
    },
    '100%': {
      left: 1,
    },
  },
  '@keyframes slice4': {
    '0%': {
      left: -1,
    },
    '25%': {
      left: 2,
    },
    '50%': {
      left: 0,
    },
    '75%': {
      left: -1,
    },
    '100%': {
      left: 0,
    },
  },
}))

const Slice = props => {
  const classes = useStyles(props)
  const { slice1, slice2, slice3, slice4 } = classes
  const slices = [slice1, slice2, slice3, slice4]
  return (
    <>
      {slices.map((name, id) => (
        <div key={id} className={name}>
          {props.children}
        </div>
      ))}
    </>
  )
}

export default Slice
