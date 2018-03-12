import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import emitter from '../../../models/ev'
import LableWarp from '../../components/LableWarp'
import ArticleList from '../../components/ArticleList'

class Label extends Component{

	constructor(){
		super()

		this.state = {
			articles:[],
			showArticleList:false
		}
	}

	componentDidMount(){
		const that = this;
        this.eventEmitter = emitter.addListener("callArticlesList",this.eventCallback.bind(that))
	}
	
	componentWillUnmount(){

		console.log(this.eventEmitter._events['callArticlesList'])
		const that = this;
		if(this.eventEmitter){
			emitter.removeListener("callArticlesList",this.eventCallback);
		}
	}

	eventCallback(data){
        this.setState({
			articles:data.articles,
			showArticleList:true
		})
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
						<ArticleList articles={this.state.articles} back={this.LableController.bind(this,[],false)} ></ArticleList>:
						<LableWarp></LableWarp>
				}
			</div>
		)	
	}
}

export default Label;