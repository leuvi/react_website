import React from 'react'
import {
  BrowserRouter,
  HashRouter,
} from 'react-router-dom'
import Routes from './router'
import { hot } from 'react-hot-loader/root'

const Router = process.env.NODE_ENV == 'development' ? HashRouter : BrowserRouter

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export default hot(App)