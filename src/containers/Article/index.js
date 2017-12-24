import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ArticleList from '../../components/ArticleList'

class Artice extends Component{
	
	constructor(){
		super()
	}



	render(){
		return (
			<div id="Artice" className="container">
				<ArticleList></ArticleList>
			</div>
		)	
	}
}

export default Artice;