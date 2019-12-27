import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    zIndex: 120,
    position: 'relative',
    display: 'flex',
    width: 200,
    height: 45,
    color: 'white',
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
  },
  frame: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    userSelect: 'none',
    background: 'transparent',
    justifyContent: 'center',
    boxSizing: 'border-box',
    transition: 'all 0.4s',
    '&::before': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 1,
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      border: `2px inset ${theme.palette.secondary.main}`,
      opacity: 0.6,
      filter: 'blur(5px)',
    },
    '&::after': {
      content: `""`,
      position: 'absolute',
      boxSizing: 'border-box',
      zIndex: 1,
      top: 0,
      left: 0,
      width: 'inherit',
      height: 'inherit',
      border: `1px double ${theme.palette.secondary.dark}`,
      opacity: 0.8,
      filter: 'saturate(2000%)',
    },
  },
})

class Button extends React.Component {
  state = { isPressed: false, isHovered: false }

  toggleHover = () => {
    this.setState({ isHovered: true })
  }

  togglePress = () => {
    this.setState({ isPressed: !this.state.isPressed })
  }

  closePressHover = () => {
    this.setState({ isPressed: false, isHovered: false })
  }

  render() {
    const { children, classes, disabled, glowoff, onClick, id } = this.props
    return (
      <Shadow
        className={classes.button}
        {...this.props}
        key={id}
        onClick={disabled ? null : onClick}
        onMouseMove={this.toggleHover}
        onMouseLeave={this.closePressHover}
      >
        <div
          className={classes.frame}
          style={{
            opacity: glowoff ? 0 : this.state.isHovered ? 0.8 : 0,
          }}
        />
        {children}
      </Shadow>
    )
  }
}

export default withStyles(styles)(Button)
