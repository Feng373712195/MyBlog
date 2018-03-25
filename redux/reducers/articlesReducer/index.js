
import { combineReducers } from 'redux'
import { 
	GET_SUCCESS_ARTICLES,
	SHOW_ARTICLES,
	HIDE_ARTICLES, 
	CLEAN_ARTICLES } from './../../actions/articles'

function articlesReducer(state = [] ,action){
	switch(action.type){
		case GET_SUCCESS_ARTICLES:
			return [
				...state,
				...action.data
			]
		case CLEAN_ARTICLES:
			state = []
			return state
		default:
			return state
	}
}


export const currentArticle = ( state= {} ,action ) =>{
	switch(action.type){
		case SHOW_ARTICLES:
			console.log('SHOW_ARTICLES')
			return Object.assign({},state,action.article)
		case HIDE_ARTICLES:
			console.log('HIDE_ARTICLES')
			state = {};
			return state
		default:
			return state
	}
}

export default combineReducers({
	articlesReducer,
	currentArticle
})