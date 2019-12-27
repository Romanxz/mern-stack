import React from 'react'
import RouteContainer from '../animations/container'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Menu from '../ui/advanced/menu'
import Spacer from '../ui/basic/spacer'
import Header from '../ui/advanced/text-fx/variants/header'
import TableRow from '../ui/advanced/tablerow'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
}))

const Skills = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <RouteContainer className={classes.container}>
      <Grid container direction="row">
        <Hidden smDown>
          <Grid item md={5} lg={6} xl={6} />
        </Hidden>
        <Grid
          item
          container
          direction="column"
          style={{ width: '100%' }}
          xs={12}
          sm={12}
          md={7}
          lg={6}
          xl={6}
        >
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{
              minHeight: mdUp ? '60%' : '50%',
            }}
          >
            <Spacer size={mdUp ? 10 : 4} />
            <Header appear="left">SKILLS</Header>
            <Spacer size={mdUp ? 4 : 2} />
            <TableRow
              subheader="Javascript"
              strings={[
                { string: 'Coding since october 1st, 2018.' },
                { string: 'Current skill level - Junior.' },
                { string: 'Tech: Es5, Es6, REST API' },
              ]}
            />
            <Spacer size={2} />
            <TableRow
              subheader="React"
              strings={[
                { string: 'I build responsive, fast and juicy UIs.' },
                { string: 'Tools: Create-React-App, material-ui,' },
                { string: 'react-router, react-pose, next.js' },
              ]}
            />
          </Grid>
          <Menu
            links={[
              { name: 'HOME', to: '/' },
              { name: 'BIO', to: '/bio' },
              { name: 'THEME', to: '/theme' },
            ]}
          />
        </Grid>
      </Grid>
    </RouteContainer>
  )
}

export default Skills
