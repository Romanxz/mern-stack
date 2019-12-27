import React from 'react'
import TextFX from '../text-fx'

const Subheader = props => {
  return (
    <TextFX
      glitch
      shadow
      break
      size={props.size ? props.size : 40}
      style={{
        fontFamily: 'Aero',
        fontWeight: 100,
        letterSpacing: -2,
        textTransform: props.uppercase ? 'uppercase' : 'none',
      }}
      {...props}
    >
      {props.children}
    </TextFX>
  )
}

export default Subheader
