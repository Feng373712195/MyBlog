
import { combineReducers } from 'redux'
import {
	GET_SUCCESS_ARTICLES,
	SHOW_ARTICLES,
	HIDE_ARTICLES,
	CLEAN_ARTICLES,
	// 文章页面控制器type
	OPEN_ARTICLES_LOADING,
	OPEN_ARTICLES_LOADEND,
	NEXT_ARTILES_LIST_PAGE,
	PRE_ARTILES_LIST_PAGE,
	CUREENT_ARTILES_LIST_PAGE,
	FIRST_ARTILES_LIST_PAGE,
	LAST_ARTILES_LIST_PAGE,
	// 文章加载蒙层mask
	SHOW_LOAD_ARTICLES_MASK,
	HIDE_LOAD_ARTICLES_MASK,
	// 定位文章项
	TO_ARTILES_ITEM_ID,
	CLEAN_TO_ARTILES_ITEM_ID,
	// 文章总数
	SET_ARTILES_TOTAL
} from './../../actions/articles'

function articlesReducer(state = [] ,action){

	switch(action.type){
		case GET_SUCCESS_ARTICLES:
			const { list,page } = action.data;
			// 已经加载过这个页面
			if( state.find(item=>item.from === page) ){
				return state;
			}
			// 否则更新state
			return [
				...state,
				{
					list,
					from:page,
				}
			]
		case CLEAN_ARTICLES:
			console.log( '=== CLEAN_ARTICLES ===' )
			return []
		default:
			return state
	}
}

function artilesTotal(state = 0,action){
	switch(action.type){
		case SET_ARTILES_TOTAL:
			return action.total
		default:
			return state;
	}
}

function currentArticlePage( state = 1, action ){
	switch(action.type){
		case NEXT_ARTILES_LIST_PAGE:
			return ++state
		case PRE_ARTILES_LIST_PAGE:
			return --state
		case CUREENT_ARTILES_LIST_PAGE:
			return action.page
		case FIRST_ARTILES_LIST_PAGE:
			return 1
		case LAST_ARTILES_LIST_PAGE:
			return action.page
		default:
			return state
	}
}

function toAriicleItemPosition(state = '' , action){
	switch(action.type){
		case TO_ARTILES_ITEM_ID:
			return action.itemId
		case CLEAN_TO_ARTILES_ITEM_ID:
			return ''
		default:
			return state
	}
}

function showLoadArticleListMask( state = false , action ){
	switch(action.type){
		case SHOW_LOAD_ARTICLES_MASK:
			return true
		case HIDE_LOAD_ARTICLES_MASK:
			return false
		default:
			return state
	}
}

const currentArticle = ( state = null ,action ) =>{
	switch(action.type){
		case SHOW_ARTICLES:
			return Object.assign({},state,action.article)
		case HIDE_ARTICLES:
			return null
		default:
			return state
	}
}

const loadArticle = ( state = -1,action ) =>{
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
	artilesTotal,
	currentArticlePage,
	showLoadArticleListMask,
	currentArticle,
	toAriicleItemPosition,
	loadArticle,
})
