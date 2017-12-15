import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './article.scss'

class Artice extends Component{
	
	constructor(){
		super()
		this.state = {
			articles:[]
		}

		fetch('/admin/publish/articles/find', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			  query:{}
			})
		})
		.then(res => res.json())
		.then(body => {
			console.log(body)
			if(body.code === 0){
				this.setState({
					articles:body.data
				},()=>{
					console.log(this.state.articles)
				})
			}else{
				alert('获取文章失败，请稍后再试');
			}
			
		})
	}



	render(){
		return (
			<div id="Artice" className="container">
				{this.state.articles.map(article =>{
					return (<article className="article-box">
								<h2 className="article-title">{article.title}</h2>
								<div className="article-content">{article.content}</div>
								<p className="artice-footer">
									<span className="artice-author l">{article.author}</span>
									<span className="artice-createtime r">{article.createtime}</span>
								 </p>
							</article>)
				})}
			</div>
		)	
	}
}

export default Artice;