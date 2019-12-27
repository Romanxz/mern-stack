import React from 'react'
import TextFX from '../text-fx'

const Text = props => {
  return (
    <TextFX
      glitch
      break
      size={props.size ? props.size : 20}
      style={{
        fontFamily: props.bold ? 'Clbold' : 'CL',
        fontWeight: 400,
        letterspacing: 2,
        textTransform: props.uppercase ? 'uppercase' : 'none',
      }}
      {...props}
    >
      {props.children}
    </TextFX>
  )
}

export default Text
