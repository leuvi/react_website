import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Link,
  Route,
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Home from '@views/home/index.jsx'
import Product from '@views/product/index.jsx'
import Solution from '@views/solution/index.jsx'
import Support from '@views/support/index.jsx'
import About from '@views/about/index.jsx'

const Router = process.env.NODE_ENV == 'development' ? HashRouter : BrowserRouter

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/solution">
            <Solution />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default hot(App)