import { combineReducers } from 'redux'
import { SHOW_TITLENAV,HIDE_TITLENAV } from '../actions/titleNavAction'

function visibilityNav(state = {},action){
	switch(action.type){
		case SHOW_TITLENAV:
            return action.navobj
        case HIDE_TITLENAV:
            return state
		default:
			return state
	}
}

function articles(state = [],action){
	switch(action.type){
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityNav,
	articles
})

export default todoApp