import { applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeEnhancers(
  applyMiddleware(
    history,
    thunkMiddleware.withExtraArgument({})
  )
)
