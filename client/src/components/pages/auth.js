import React, { useState, useEffect } from 'react'
import { Grid, Hidden, useMediaQuery } from '@material-ui/core/'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import RouteContainer from '../animations/container'
import Spacer from '../ui/basic/spacer'
import Header from '../ui/advanced/text-fx/variants/header'
import Text from '../ui/advanced/text-fx/variants/text'
import Label from '../ui/advanced/text-fx/variants/label'
import Head from '../head/head'
import Textfield from '../ui/basic/textfield'
import Button from '../ui/basic/button'
import useHttp from '../hooks/useHTTP'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  buttoncontainer: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 450,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 300,
    },
  },
}))

const Auth = props => {
  const { loading, request, error } = useHttp()
  const [form, setForm] = useState({ email: '', password: '' })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name.toLowerCase()]: event.target.value })
  }
  const registerHandler = async () => {
    try {
      const data = await request('api/auth/register', 'POST', { ...form })
      console.log("Data", data)
    } catch (e) {}
  }

  const classes = useStyles(props)
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
            <Header appear="left">AUTH PAGE</Header>
            <Spacer size={mdUp ? 4 : 2} />
            <Text bold uppercase size={20} appear="right">
              Login or register
            </Text>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="flex-start"
            alignItems={mdUp ? 'flex-start' : 'center'}
            style={{
              minHeight: mdUp ? '50%' : '60%',
            }}
          >
            <Textfield type="text" name="Email" onChange={changeHandler} />
            <Spacer size={mdUp ? 2 : 1} />
            <Textfield
              type="password"
              name="Password"
              onChange={changeHandler}
            />
            <Spacer size={mdUp ? 4 : 2} />
            <Grid
              item
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              className={classes.buttoncontainer}
            >
              <Button>
                <Label uppercase>LOGIN</Label>
              </Button>
              <Button onClick={registerHandler} disabled={loading}>
                <Label uppercase>REGISTER</Label>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </RouteContainer>
  )
}

export default Auth
