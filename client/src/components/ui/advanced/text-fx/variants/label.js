import React from 'react'
import TextFX from '../text-fx'

const Label = props => {
  return (
    <TextFX
      glitch
      noresponse
      size={props.size ? props.size : 18}
      style={{
        fontFamily: 'Jura',
        fontWeight: 400,
        letterSpacing: 0,
        textTransform: props.uppercase ? 'uppercase' : 'none',
        height: '100%',
      }}
      {...props}
    >
      {props.children}
    </TextFX>
  )
}

export default Label
