import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ArticleList from '../../components/ArticleList'
import Paginator from '../../components/Paginator'
import LoadMask from '../../components/LoadMask'

import { 
    getArticles,
    NEXT_ARTILES_LIST_PAGE,
	PRE_ARTILES_LIST_PAGE,
	CUREENT_ARTILES_LIST_PAGE,
	FIRST_ARTILES_LIST_PAGE,
    LAST_ARTILES_LIST_PAGE,
} from '@store/actions/articles';

import './style.scss';

class Artice extends Component{


	pageCanage = ( pagenum,lastPage,action ) => {

		const { dispatch } = this.props;	
		const types = {
			'first':FIRST_ARTILES_LIST_PAGE,
			'per':PRE_ARTILES_LIST_PAGE,
			'next':NEXT_ARTILES_LIST_PAGE,
			'last':LAST_ARTILES_LIST_PAGE,
		}
		const type = types[action] ? types[action] : CUREENT_ARTILES_LIST_PAGE
		dispatch({ type,page: action != 'last'? pagenum : lastPage })
    
	}

	fetchList = (page)=>{
		const { dispatch,articles } = this.props;

		console.log( articles,'articles' )
		if( !articles.find(list=>list.from === page) ){
			dispatch(getArticles({},page,10,true))
		}
		
	}

	render(){
		const { total,currentPage,dispatch } = this.props;

		return (
			<section id="Artice" className="container">
				<Paginator 
					total={total} 
					pageSize={10}
					fetchData={ this.fetchList.bind(this) }
					currentPage={currentPage}
					changePage={ this.pageCanage.bind(this) } >
				</Paginator>
				<ArticleList></ArticleList>
				<LoadMask></LoadMask>
			</section>
		)	
	}
}

function select(state){
	return {
		articles:state.articles.articlesReducer,
		total:state.articles.artilesTotal,
		currentPage:state.articles.currentArticlePage
	}
}

export default connect(select)(Artice);