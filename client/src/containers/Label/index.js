import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Emitter from '../../../models/ev'
import LableWarp from '../../components/LableWarp'
import ArticleList from '../../components/ArticleList'
import { rouingState } from '../../../redux/actions/global'

class Label extends Component{

	render(){
		return (
			<div id="Label" className="container">
				<ArticleList></ArticleList>
				<LableWarp></LableWarp>
			</div>
		)	
	}
}

export default Label
