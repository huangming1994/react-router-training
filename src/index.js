import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import InfoPage from './InfoPage'
import HomePage from './HomePage'

const routes = [
  {
    path: '/homepage',
    component: HomePage,
  },
  {
    path: '/infopage',
    component: InfoPage,
  },
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/homepage">HomePage</Link></li>
            <li><Link to="/infopage">InfoPage</Link></li>
          </ul>

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
