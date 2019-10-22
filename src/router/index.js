import React, { lazy, Suspense } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Loading from '../components/Loading/index.jsx'


const Home = lazy(() => import('@views/home/index.jsx'))
const Product = lazy(() => import('@views/product/index.jsx'))
const Solution = lazy(() => import('@views/solution/index.jsx'))
const Support = lazy(() => import('@views/support/index.jsx'))
const About = lazy(() => import('@views/about/index.jsx'))

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product" component={Product}></Route>
        <Route path="/product/:name" component={Product}></Route>
        <Route path="/solution" component={Solution}></Route>
        <Route path="/support" component={Support}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Suspense>
  )
}