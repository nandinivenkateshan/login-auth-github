import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  )
}
export default routes
