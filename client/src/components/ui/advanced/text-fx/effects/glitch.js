import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const glitchStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  zIndex: -1,
  opacity: 1,
}

const useStyles = makeStyles(theme => ({
  glitch1: {
    ...glitchStyles,
    left: -2,
    top: 1,
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    textShadow: '-1px 0 red',
    animation: `$glitch1 3s infinite ease-out reverse`,
    animationDuration: props => `${props.duration ? props.duration : '3'}s`,
    animationFillMode: 'forwards',
    background: 'transparent',
  },
  glitch2: {
    ...glitchStyles,
    left: 2,
    top: -1,
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    animation: `$glitch2 3s infinite ease-out reverse`,
    animationDuration: props => `${props.duration ? props.duration : '3'}s`,
    animationFillMode: 'forwards',
    background: 'transparent',
  },
  glitch3: {
    ...glitchStyles,
    left: -1,
    top: 2,
    // opacity: 0.8,
    filter: 'saturate(5000%)',
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    textShadow: '-1px 0 red',
    animation: `$glitch3 100s infinite linear alternate-reverse`,
    animationDuration: props => `${props.duration ? props.duration : '3'}s`,
    animationFillMode: 'forwards',
    background: 'transparent',
  },
  glitch4: {
    ...glitchStyles,
    left: 1,
    top: -2,
    // opacity: 0.8,
    filter: 'saturate(5000%)',
    [theme.breakpoints.up('md')]: {
      justifyContent: props =>
        props.break ? 'flex-start' : props.flexstart ? 'flex-start' : 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: props => (props.flexstart ? 'flex-start' : 'center'),
    },
    animation: `$glitch4 100s infinite linear alternate-reverse`,
    animationDuration: props => `${props.duration ? props.duration : '3'}s`,
    animationFillMode: 'forwards',
    background: 'transparent',
  },
  '@keyframes glitch1': {
    '0%': {
      clipPath: 'inset(40% 0 61% 0)',
      textShadow: '-1px 0 red',
      color: 'red',
    },
    '5%': {
      clipPath: 'inset(92% 0 1% 0)',
      textShadow: '-1px 0 red',
      color: '#33FFE3',
    },
    '15%': {
      clipPath: 'inset(43% 0 1% 0)',
      textShadow: '-1px 0 #FF00FF',
      color: '#33FFE3',
    },
    '20% ': {
      clipPath: 'inset(25% 0 58% 0)',
      textShadow: '-1px 0 #9400D3',
      color: 'inherit',
    },
    '25%': {
      clipPath: 'inset(54% 0 7% 0)',
      textShadow: '-1px 0 #4B0082',
      color: 'purple',
    },
    '35%': {
      clipPath: 'inset(58% 0 43% 0)',
      textShadow: '-1px 0 red',
      color: 'green',
    },
    '36%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
    '100%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
  },
  '@keyframes glitch2': {
    '0%': {
      clipPath: 'inset(12% 0 89% 0)',
      textShadow: ' 1px 0 blue',
      color: 'inherit',
    },
    '5%': {
      clipPath: 'inset(44% 0 63% 0)',
      textShadow: ' 1px 0 #000080',
      color: '#32CD32',
    },
    '15%': {
      clipPath: 'inset(22% 0 75% 0)',
      textShadow: ' 1px 0 #00CED1',
      color: 'inherit',
    },
    '20% ': {
      clipPath: 'inset(75% 0 18% 0)',
      textShadow: ' 1px 0 #7FFFD4',
      color: 'inherit',
    },
    '25%': {
      clipPath: 'inset(3% 0 35% 0)',
      textShadow: ' 1px 0 #0000CD',
      color: '#000080',
    },
    '35%': {
      clipPath: 'inset(58% 0 43% 0)',
      textShadow: ' 1px 0 #191970',
      color: 'inherit',
    },
    '36%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
    '100%': {
      clipPath: 'inset(100% 0 100% 0)',
    },
  },
  '@keyframes glitch3': {
    '0%': {
      clipPath: 'inset(54% 0 61% 0)',
      textShadow: '-1px 0 red',
      color: '#85ffd8',
    },
    '10%': {
      clipPath: 'inset(92% 0 1% 0)',
      textShadow: '-1px 0 red',
      color: '#85ffd8',
    },
    '20%': {
      clipPath: 'inset(43% 0 51% 0)',
      textShadow: '-1px 0 #FF00FF',
      color: '#85ffd8',
    },
    '60% ': {
      clipPath: 'inset(3% 0 90% 0)',
      textShadow: '-1px 0 #9400D3',
      color: '#85ffd8',
    },
    '80%': {
      clipPath: 'inset(54% 0 40% 0)',
      textShadow: '-1px 0 #4B0082',
      color: '#85ffd8',
    },
    '90%': {
      clipPath: 'inset(81% 0 12% 0)',
      textShadow: '-1px 0 red',
      color: '#85ffd8',
    },
    '100%': {
      clipPath: 'inset(97% 0 1% 0)',
      color: '#85ffd8',
    },
  },
  '@keyframes glitch4': {
    '0%': {
      clipPath: 'inset(7% 0 89% 0)',
      textShadow: ' 1px 0 blue',
      color: '#8800ff',
    },
    '10%': {
      clipPath: 'inset(56% 0 40% 0)',
      textShadow: ' 1px 0 #000080',
      color: '#8800ff',
    },
    '20%': {
      clipPath: 'inset(22% 0 75% 0)',
      textShadow: ' 1px 0 #00CED1',
      color: '#8800ff',
    },
    '60% ': {
      clipPath: 'inset(75% 0 18% 0)',
      textShadow: ' 1px 0 #7FFFD4',
      color: '#8800ff',
    },
    '80%': {
      clipPath: 'inset(3% 0 90% 0)',
      textShadow: ' 1px 0 #0000CD',
      color: '#8800ff',
    },
    '90%': {
      clipPath: 'inset(58% 0 40% 0)',
      textShadow: ' 1px 0 #191970',
      color: '#8800ff',
    },
    '100%': {
      clipPath: 'inset(90% 0 0% 0)',
      color: '#8800ff',
    },
  },
}))

const Glitch = props => {
  const classes = useStyles(props)
  const { glitch1, glitch2, glitch3, glitch4 } = classes
  const glitches = [glitch1, glitch2, glitch3, glitch4]
  return (
    <>
      {glitches.map((name, id) => (
        <div
          style={{ zIndex: props.isHovered ? 10 : -1 }}
          key={id}
          className={name}
        >
          {props.children}
        </div>
      ))}
    </>
  )
}

export default Glitch
