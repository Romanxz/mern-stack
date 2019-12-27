import React from 'react'
import RouteContainer from '../animations/container'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Menu from '../ui/advanced/menu'
import Spacer from '../ui/basic/spacer'
import Header from '../ui/advanced/text-fx/variants/header'
import Text from '../ui/advanced/text-fx/variants/text'
import Head from '../head/head'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}))

const Home = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <RouteContainer className={classes.container}>
      <Grid container direction="row">
        <Hidden smDown>
          <Grid item md={6} lg={6}>
            {/* <Head /> */}
          </Grid>
        </Hidden>
        <Grid item container direction="column" xs={12} sm={12} md={6} lg={6}>
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{
              minHeight: mdUp ? '50%' : '40%',
            }}
          >
            <Spacer size={mdUp ? 10 : 4} />
            <Header appear="left">ROMAN</Header>
            <Header appear="right">GORBUNOV</Header>
            <Spacer size={mdUp ? 4 : 2} />
            <Text bold uppercase size={20} appear="left">
              Javascript Programmer
            </Text>
            <Spacer size={2} />
            <Text bold uppercase size={20} appear="right">
              Web Designer
            </Text>
          </Grid>
          <Menu
            links={[
              { name: 'SKILLS', to: '/skills' },
              { name: 'BIO', to: '/bio' },
              { name: 'THEME', to: '/theme' },
            ]}
          />
        </Grid>
      </Grid>
    </RouteContainer>
  )
}

export default Home
