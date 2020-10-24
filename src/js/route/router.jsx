import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/middleware/history'
import React from 'react'
import Routes from './routes'

const Router = () =>
  (<ConnectedRouter history={history}>
    <Routes />
  </ConnectedRouter>)

export default Router
