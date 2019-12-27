import React from 'react'
import TextFX from '../text-fx'

const Header = props => {
  return (
    <TextFX
      header
      break
      key={1}
      size={90}
      style={{
        fontFamily: 'Bigmacca',
        fontWeight: 400,
        textTransform: 'uppercase',
      }}
      {...props}
    >
      {props.children}
    </TextFX>
  )
}

export default Header
