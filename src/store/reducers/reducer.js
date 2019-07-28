import { combineReducers } from 'redux'

import titleNavReducer from './titlenavReducer'
import articlesReducer from './articlesReducer'
import globalReducer from './globalReducer'
import lablesReducer from './lablesReducer'
import userReducer from './userReducer'
import historyReducer from './historyReducer';

const todoApp = combineReducers({
	global:globalReducer,
	titleNav:titleNavReducer,
	articles:articlesReducer,
	lables:lablesReducer,
	userdata:userReducer,
	history:historyReducer
})

export default todoApp