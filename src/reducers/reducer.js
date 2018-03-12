import { combineReducers } from 'redux'
import { CHANGE_TITLENAV,SET_TITLENAVACTIVE } from '../actions/titleNavAction'

function changeTitleNav(state = [],action){

	console.log(action.type)

	switch(action.type){
		case CHANGE_TITLENAV:
			return action.data
		case SET_TITLENAVACTIVE:
			/** 第一次 */
			if(action.oldindex === action.newindex){
				state[action.newindex].active = true;
				return state
			}
			state[action.oldindex].active = false;
			state[action.newindex].active = true;
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
	changeTitleNav,
	articles
})

export default todoApp