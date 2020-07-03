// filename should be root-reducer.js , because you combine all the reducer in you app here

import { combineReducers } from 'redux'
import session from './session'

export default combineReducers({
  session,
})
