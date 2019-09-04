import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import ArticleList from '../../components/ArticleList'
import Paginator from '../../components/Paginator'

import './style.scss';

class Artice extends Component{
	render(){
		return (
			<section id="Artice" className="container">
				<Paginator></Paginator>
				<ArticleList></ArticleList>
			</section>
		)	
	}
}

export default Artice;