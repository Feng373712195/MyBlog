import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './pulish-articles.scss'

import Editor from '../../components/Editor'

class PublishArticles extends Component{

	render(){

		return (
			<div id="PublishArticles" className="container" >
				<Editor ></Editor>
			</div>
		)	
	}
}

export default PublishArticles;