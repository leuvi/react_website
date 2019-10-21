import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Link,
  Route,
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

const Home = lazy(() => import('@views/home/index.jsx'))
const Product = lazy(() => import('@views/product/index.jsx'))
const Solution = lazy(() => import('@views/solution/index.jsx'))
const Support = lazy(() => import('@views/support/index.jsx'))
const About = lazy(() => import('@views/about/index.jsx'))
// import Product from '@views/product/index.jsx'
// import Solution from '@views/solution/index.jsx'
// import Support from '@views/support/index.jsx'
// import About from '@views/about/index.jsx'

const Router = process.env.NODE_ENV == 'development' ? HashRouter : BrowserRouter

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route path="/product/:name" component={Product}></Route>
            <Route path="/solution" component={Solution}></Route>
            <Route path="/support" component={Support}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default hot(App)