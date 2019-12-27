import React from 'react'
import { PoseGroup } from 'react-pose'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { RoutesAnimation, RoutesStyle } from './components/animations/routes'
// import useRoutes from './components/pages/routes'
import Menu from './components/ui/advanced/menu'
import Background from './components/ui/basic/background'
import Auth from './components/pages/auth'
import Home from './components/pages/home'
import Design from './components/pages/design'
import Skills from './components/pages/skills'
import Bio from './components/pages/bio'
import Theme from './components/pages/theme'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import themeTemplate from './components/themes/themetemplate'

class App extends React.Component {
  state = {
    White: {
      ...themeTemplate,
      typography: {
        fontFamily: [
          'Jura',
          'typeface-orbitron',
          'Raleway',
          'SF',
          'marske',
          'vgr',
          'nidsans',
          'sans-serif',
        ].join(','),
        fontSize: 18,
      },
      palette: {
        primary: { main: '#ff3838' },
        secondary: { main: '#000000' },
      },
      background: '#999999',
    },
    Black: {
      ...themeTemplate,
      typography: {
        fontFamily: [
          'Jura',
          'typeface-orbitron',
          'Raleway',
          'SF',
          'marske',
          'vgr',
        ].join(','),
        fontSize: 18,
      },
      palette: {
        primary: { main: '#0077ff' },
        secondary: { main: '#f7fffd' },
        shadow: 'rgba(0, 62, 138, 0.2)',
        border: 'rgba(140, 255, 251, 0.6)',
      },
      background: '#1a1a1f',
    },
    Gradient: {
      ...themeTemplate,
      typography: {
        fontFamily: 'Jura',
      },
      palette: {
        primary: { main: '#8502c7' },
        secondary: { main: '#07000d' },
      },
      background:
        'radial-gradient(circle, rgba(214,64,255,1) 0%, rgba(0,236,255,1) 67%, rgba(238,0,153,1) 100%)',
    },
    Custom: {
      ...themeTemplate,
      typography: {
        fontFamily: [
          'Jura',
          'typeface-orbitron',
          'Raleway',
          'SF',
          'marske',
          'vgr',
        ].join(','),
        fontSize: 18,
      },
      palette: {
        primary: { main: '#ffffff' },
        secondary: { main: '#000000' },
      },
      background: '#54ffdd',
    },
    theme: 'Black',
  }

  toggleTheme = name => {
    this.setState({ theme: name })
  }

  updateBgColor = bgcolorhex => {
    this.setState(state => ({
      Custom: {
        ...state.Custom,
        background: bgcolorhex,
      },
      theme: 'Custom',
    }))
  }

  updateTextColor = textcolorhex => {
    this.setState(state => ({
      Custom: {
        ...state.Custom,
        palette: {
          primary: { main: textcolorhex },
        },
      },
      theme: 'Custom',
    }))
  }

  render() {
    const { theme } = this.state
    // console.log(createMuiTheme(this.state[theme]))
    const isAuthenticated = false
    //basename="/coding-profile-page"
    return (
      <Router>
        <ThemeProvider
          theme={responsiveFontSizes(createMuiTheme(this.state[theme]))}
        >
          <Route
            render={({ location }) => (
              <Background theme={createMuiTheme(this.state[theme])}>
                <PoseGroup animateOnMount>
                  <RoutesAnimation style={RoutesStyle} key={location.pathname}>
                    {isAuthenticated ? (
                      <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/design" component={Design} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/bio" component={Bio} />
                        <Route
                          path="/theme"
                          render={({ props }) => (
                            <Theme
                              {...props}
                              theme={theme}
                              toggleTheme={this.toggleTheme}
                              updateBgColor={this.updateBgColor}
                              updateTextColor={this.updateTextColor}
                            />
                          )}
                        />
                        <Redirect to="/" />
                      </Switch>
                    ) : (
                      <Switch location={location}>
                        <Route path="/auth" component={Auth} />
                        <Redirect to="/auth" />
                      </Switch>
                    )}
                  </RoutesAnimation>
                </PoseGroup>
              </Background>
            )}
          />
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
