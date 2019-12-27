import { makeStyles, useTheme } from '@material-ui/styles'
import React from 'react'

const useStyle = makeStyles(theme => ({
  spacer: {
    width: '100%',
    height: styleprops => styleprops.theme.spacing(styleprops.size),
    position: 'relative',
  },
}))

export const Spacer = ({ size = 1 }) => {
  const theme = useTheme()
  const styleprops = { theme, size }
  const classes = useStyle(styleprops)
  return <div className={classes.spacer} />
}

export default Spacer
