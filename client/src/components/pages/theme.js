import React from 'react'
import RouteContainer from '../animations/container'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import Themeform from '../ui/advanced/form/themeform'
import Spacer from '../ui/basic/spacer'
import Header from '../ui/advanced/text-fx/variants/header'
import Text from '../ui/advanced/text-fx/variants/text'
import List from '../ui/advanced/list/list'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
})

const Theme = ({ theme, toggleTheme, updateBgColor, updateTextColor }) => {
  const classes = useStyles()
  const theme2 = useTheme()
  const mdUp = useMediaQuery(theme2.breakpoints.up('md'))
  return (
    <RouteContainer className={classes.container}>
      <Grid container direction="row">
        <Hidden smDown>
          <Grid item md={6} lg={6} />
        </Hidden>
        <Grid
          item
          container
          direction="column"
          style={{ width: '100%' }}
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{
              minHeight: mdUp ? '70%' : '50%',
            }}
          >
            <Spacer size={mdUp ? 10 : 2} />
            <Header appear="left">Theme</Header>
            <Spacer size={4} />
            <Text appear="right" bold uppercase size={20}>
              Choose Your Theme
            </Text>
            <Spacer size={2} />
            <Text appear="left" bold uppercase size={20}>
              Make a new one with custom hex codes
            </Text>
            <Spacer size={2} />
            <List />
          </Grid>
          {/* <Themeform
            mdUp={mdUp}
            theme={theme}
            toggleTheme={toggleTheme}
            updateBgColor={updateBgColor}
            updateTextColor={updateTextColor}
          /> */}
        </Grid>
      </Grid>
    </RouteContainer>
  )
}

export default Theme
