import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About'
import PageNotFound from './Error/PageNotFound'
import ServerErr from './Error/ServerErr'

function routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/err' component={ServerErr} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
export default routes
