import React from 'react'
import Buttonlink from './buttonlink'
import Spacer from '../basic/spacer'
import { useTheme } from '@material-ui/core/styles'
import { Grid, useMediaQuery } from '@material-ui/core'

const Menu = props => {
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems={mdUp ? 'flex-start' : 'center'}
      style={{
        minHeight: '30%',
        maxHeight: '50%',
        height: 'min-content',
      }}
    >
      {props.links.map((value, id) => {
        return (
          <div key={id + 10}>
            <Spacer size={3} key={id + 20} />
            <Buttonlink id={id} glitch to={value.to}>
              {value.name}
            </Buttonlink>
          </div>
        )
      })}
    </Grid>
  )
}

export default Menu
