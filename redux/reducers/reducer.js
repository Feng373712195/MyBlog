import { combineReducers } from 'redux'

import titleNavReducer from '../reducers/titlenavReducer'
import articlesReducer from '../reducers/articlesReducer'
import globalReducer from '../reducers/globalReducer'
import lablesReducer from '../reducers/lablesReducer'
import userReducer from '../reducers/userReducer'

const todoApp = combineReducers({
	global:globalReducer,
	titleNav:titleNavReducer,
	articles:articlesReducer,
	lables:lablesReducer,
	userdata:userReducer
})

export default todoApp