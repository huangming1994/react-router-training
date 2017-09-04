import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import InfoPage, { infoPageReducer } from './InfoPage'
import HomePage, { homePageReducer } from './HomePage'

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

const store = createStore(combineReducers({
  homePage: homePageReducer,
  infoPage: infoPageReducer,
}))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
