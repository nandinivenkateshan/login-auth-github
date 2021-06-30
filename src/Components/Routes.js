import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageNotFound from './Error/PageNotFound'
import ServerErr from './Error/ServerErr'

function routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={App} />
        <Route path='/err' component={ServerErr} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}
export default routes
