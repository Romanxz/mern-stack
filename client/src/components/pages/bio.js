import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RouteContainer from '../animations/container'
import TextFX from '../ui/advanced/text-fx/text-fx'
import Buttonlink from '../ui/advanced/buttonlink'
import Spacer from '../ui/basic/spacer'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
}))

const Bio = props => {
  const classes = useStyles(props)
  return (
    <RouteContainer className={classes.container}>
      <TextFX
        appear="right"
        glitch
        slice
        shadow
        size={90}
        style={{
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 900,
          letterSpacing: -5,
          textTransform: 'uppercase',
        }}
      >
        IN DEVELOPMENT
      </TextFX>
      <Spacer size={4} />
      <Buttonlink id={12} glitch to="/skills">
        SKILLS
      </Buttonlink>
      <Spacer size={3} />
      <Buttonlink id={65} glitch to="/about">
        BIO
      </Buttonlink>
      <Spacer size={3} />
      <Buttonlink id={667} glitch to="/theme">
        THEME
      </Buttonlink>
      <Spacer size={3} />
      <Buttonlink id={61} glitch to="/">
        HOME
      </Buttonlink>
    </RouteContainer>
  )
}

export default Bio
