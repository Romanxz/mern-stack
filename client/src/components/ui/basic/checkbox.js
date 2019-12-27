import React from 'react'
import Shadow from '../../animations/shadow'
import { withStyles } from '@material-ui/core/styles'
import Label from '../advanced/text-fx/variants/label'

const styles = theme => ({
  hiddencheckbox: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clippath: ' inset(50 %)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
  },
  actualcheckbox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: '50%',
    cursor: 'pointer',
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
    height: 25,
    width: 25,
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
  checkmark: {
    position: 'relative',
    display: 'flex',
    zIndex: 30,
    height: 25,
    width: 25,
    opacity: 1,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    cursor: 'pointer',
    transition: 'all 0.7s',
  },
  name: {
    position: 'absolute',
    left: 30,
    width: 80,
    background: 'transparent',
  },
  wrapper: {
    zIndex: 100,
    position: 'relative',
    display: 'flex',
    height: 30,
    width: 120,
    userSelect: 'none',
  },
})

class Checkbox extends React.Component {
  state = { isHovered: false }

  toggleHover = () => {
    this.setState({ isHovered: !this.state.isHovered })
  }

  closeHover = () => {
    this.setState({ isHovered: false })
  }

  render() {
    const { isHovered } = this.state
    let { style, key, classes, checked, onChange } = this.props
    const {
      hiddencheckbox,
      actualcheckbox,
      checkmark,
      frame,
      name,
      wrapper,
    } = classes
    return (
      <div className={wrapper}>
        <Shadow nopress className={actualcheckbox} style={style} key={key}>
          <div className={name}>
            <Label flexstart uppercase size={16}>
              {this.props.name}
            </Label>
          </div>
          <label className={actualcheckbox}>
            <div
              className={checkmark}
              style={{ width: checked ? 25 : 0, height: checked ? 25 : 0 }}
              onMouseMove={this.toggleHover}
              onMouseLeave={this.closeHover}
            />
            <input
              name={this.props.name}
              className={hiddencheckbox}
              type="checkbox"
              onClick={onChange}
              {...this.props}
            />
          </label>
          <div className={frame} style={{ opacity: isHovered ? 1 : 0.4 }} />
        </Shadow>
      </div>
    )
  }
}

export default withStyles(styles)(Checkbox)
