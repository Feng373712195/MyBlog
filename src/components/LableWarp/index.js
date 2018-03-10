import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Lables from '../Lables'
import ArticleList from '../ArticleList'

class LabelWarp extends Component{

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
        return(
            <div className='lable-warp'>
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

export default LabelWarp;