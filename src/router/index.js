import React, { lazy, Suspense } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Loading from '../components/Loading/index.jsx'

//开发环境无需异步代码分割
const load = function (component) {
  return process.env.NODE_ENV == 'development' ?
    require(`@views/${component}/index.jsx`).default :
    lazy(() => import(`@views/${component}/index.jsx`))
}

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={load('home')}></Route>
        <Route exact path="/product" component={load('product')}></Route>
        <Route path="/product/:name" component={load('product')}></Route>
        <Route path="/solution" component={load('solution')}></Route>
        <Route path="/support" component={load('support')}></Route>
        <Route path="/about" component={load('about')}></Route>
      </Switch>
    </Suspense>
  )
}