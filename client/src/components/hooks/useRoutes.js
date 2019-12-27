import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from './components/pages/auth'
import Home from './components/pages/home'
import Design from './components/pages/design'
import Skills from './components/pages/skills'
import Bio from './components/pages/bio'
import Theme from './components/pages/theme'

const useRoutes = isAuntenticated => {
  if (isAuntenticated) {
    return (
      <>
        <Route path="/" exact component={Home} />
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
      </>
    )
  } else {
    return (
      <>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </>
    )
  }
}

export default useRoutes
