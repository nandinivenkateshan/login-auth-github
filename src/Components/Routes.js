import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loader from './Loader'

const App = React.lazy(() => import('../App'))
const PageNotFound = React.lazy(() => import('./Error/PageNotFound'))
const ServerErr = React.lazy(() => import('./Error/ServerErr'))

function routes () {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={App} />
            <Route path='/err' component={ServerErr} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}
export default routes
