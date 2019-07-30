import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import ArticleList from '../../components/ArticleList'

import './style.scss';

class Artice extends Component{
	render(){
		return (
			<section id="Artice" className="container">
				<ArticleList ref={this.props.ref} ></ArticleList>
			</section>
		)	
	}
}

export default Artice;