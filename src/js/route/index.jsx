import { Provider } from 'react-redux'
import React from 'react'
import store from '../redux/store'
import Router from './router'

const Route = () =>
  (<Provider store={store}>
    <Router />
  </Provider>)

export default Route
