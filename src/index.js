import React, { Component } from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
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

export const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
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
