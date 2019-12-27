import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'
import Label from '../advanced/text-fx/variants/label'

const styles = theme => ({
  label: {
    position: 'absolute',
    height: 20,
    width: '100%',
    top: 18,
    left: 20,
    background: 'transparent',
    transitionProperty: 'all',
    transitionDuration: '0.4s',
  },
  wrapper: {
    position: 'relative',
    background: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: 65,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 450,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
    },
  },
  frame: {
    position: 'relative',
    height: 65,
    width: '100%',
    background: 'transparent',
    border: '1px solid black',
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 450,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
    },
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
      // borderRadius: 8,
      opacity: 0.6,
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
      // borderRadius: 8,
      opacity: 0.8,
      filter: 'saturate(2000%)',
    },
  },
  input: {
    zIndex: 100,
    position: 'absolute',
    height: 65,
    width: '100%',
    border: 'none',
    boxSizing: 'border-box',
    // borderRadius: 8,
    background: 'transparent',
    fontFamily: 'Jura',
    fontWeight: 500,
    fontSize: 20,
    color: theme.palette.secondary.dark,
    outline: 'none',
    letterSpacing: 0,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 450,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
    },
  },
})

class Textfield extends React.Component {
  state = { isSelected: false, isHovered: false }

  enableFocus = () => {
    this.setState({ isSelected: true })
  }

  disableFocus = e => {
    if (e.target.value === '') this.setState({ isSelected: false })
  }

  toggleHover = () => {
    this.setState({ isHovered: true })
  }

  closeHover = () => {
    this.setState({ isHovered: false })
  }

  getInnerRef = () => this.ref

  render() {
    const { enableFocus, disableFocus, toggleHover, closeHover } = this,
      { name, type, style, disabled, onChange, key } = this.props,
      { isSelected, isHovered } = this.state,
      { input, label, frame, wrapper } = this.props.classes
    return (
      <Shadow
        key={key}
        className={wrapper}
        style={style}
        onMouseMove={toggleHover}
        onMouseLeave={closeHover}
        nopress
      >
        <div className={label} style={{ top: isSelected ? 0 : 35 }}>
          <Label
            flexstart
            size={20}
          >
            {name}
          </Label>
        </div>
        <input
          className={input}
          style={{ paddingLeft: 20, width: 'calc(100% - 20px)' }}
          name={name}
          type={type ? type : 'text'}
          disabled={disabled}
          onChange={disabled ? null : onChange}
          onSelect={enableFocus}
          onBlur={disableFocus}
          autoComplete="off"
          ref={r => (this.ref = r)}
        />
        <div
          className={frame}
          style={{ opacity: isSelected ? 1 : isHovered ? 0.8 : 0 }}
        />
      </Shadow>
    )
  }
}

export default withStyles(styles)(Textfield)
