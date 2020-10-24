import { combineReducers } from 'redux'
import { history } from '../middleware/history'
import router from './router'


export default combineReducers({
  router: router(history)
})
