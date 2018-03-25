
import { combineReducers } from 'redux'
import { 
	GET_SUCCESS_LABEL,
	CLEAN_LABEL,
	SELECT_LABLE,
	UNSELECT_LABLE,
	GET_LABLE_RELATION_ARTICLES,
	CLEAN_LABLE_RELATION_ARTICLES
 } from './../../actions/lable'

function lablesReducer(state = [] ,action){
	switch(action.type){
		case GET_SUCCESS_LABEL:
			return [...state,...action.data]
		case CLEAN_LABEL:
			state = [];
			return state
		default:
			return state
	}
}

function selectlable(state = '',action){
	switch(action.type){
		case SELECT_LABLE:
			state = action.lable
			return state
		case UNSELECT_LABLE:
			state = ''
			return state
		default:
			return state
	}
}

function lableRelationArticles(state = [],action){
	switch(action.type){
		case GET_LABLE_RELATION_ARTICLES:
			console.log(action)
			return [
				...state,
				...action.articles
			]
		case CLEAN_LABLE_RELATION_ARTICLES:
			state = action.articles;
			return state
		default:
			return state
	}
}

export default  combineReducers({
	lablesReducer,
	selectlable,
	lableRelationArticles
})