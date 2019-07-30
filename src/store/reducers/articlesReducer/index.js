
import { combineReducers } from 'redux'
import { 
	GET_SUCCESS_ARTICLES,
	SHOW_ARTICLES,
	HIDE_ARTICLES, 
	CLEAN_ARTICLES,
	OPEN_ARTICLES_LOADING,
	OPEN_ARTICLES_LOADEND
	 } from './../../actions/articles'

function articlesReducer(state = [] ,action){
	switch(action.type){
		case GET_SUCCESS_ARTICLES:
			// console.log( new Array(10).fill(action.data[0],10),action.data[0],'action.data' )
			return [
				...state,
				...[action.data[0],action.data[0],action.data[0],action.data[0],action.data[0],action.data[0],action.data[0],action.data[0],action.data[0]]
				// ...action.data
			]
		case CLEAN_ARTICLES:
			return []
		default:
			return state
	}
}


export const currentArticle = ( state= {} ,action ) =>{
	switch(action.type){
		case SHOW_ARTICLES:
			return Object.assign({},state,action.article)
		case HIDE_ARTICLES:
			state = {};
			return state
		default:
			return state
	}
}

export const loadArticle = ( state = -1,action ) =>{
	switch(action.type){
		case OPEN_ARTICLES_LOADING:
			console.log(action.index)
			$(`.article-list:nth-child(${action.index+1}) h2 .loader`)
			.removeClass('disabled')
			.addClass('active');
			state = action.index;
			return state
		case OPEN_ARTICLES_LOADEND:
			$(`.article-list:nth-child(${state+1}) h2 .loader`)
			.removeClass('active')
			.addClass('disabled' );
			state = -1;
			return state
		default:
			return state
	}
}

export default combineReducers({
	articlesReducer,
	currentArticle,
	loadArticle,
})