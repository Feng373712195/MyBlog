import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Lables from '../../components/Lables'
import ArticleList from '../../components/ArticleList'

class Label extends Component{
	
	constructor(){
		super()

		this.state = {
			articles:[],
			showArticleList:false
		}
	}

	LableController(articles,isShow){
		this.setState({
			articles:articles,
			showArticleList:isShow
		})
	}

	render(){
		return (
			<div id="Label" className="container">
				{
					this.state.showArticleList?
					<ArticleList articles={this.state.articles} back={this.LableController.bind(this,[],false)} ></ArticleList>
					:
					<Lables LableController={this.LableController.bind(this)} ></Lables>
				}
			</div>
		)	
	}
}

export default Label;