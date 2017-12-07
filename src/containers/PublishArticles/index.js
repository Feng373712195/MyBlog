import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './pulish-articles.scss'

class PublishArticles extends Component{
	
	render(){
		return (
			<div id="PublishArticles" className="container" >

				<form className="ui form">

					<div className="field">
						<label>文章标题</label>
						<input name="first-name" type="text" placeholder="文章标题..." />
					</div>

					<div className="field">
						<label>文章内容</label>
						<textarea></textarea>
					</div>

					<div className="ui right labeled left icon input">
						<i class="tags icon"></i>
						<input type="text" placeholder="输入标签" />
						<a class="ui tag label">
							添加标签
						</a>
					</div>

					<div className="btns" >
						<button className="ui green button">发布</button>
						<button className="ui red button">保存</button>
						<button className="ui blue button">预览</button>
					</div>

				</form>
				
			</div>
		)	
	}
}

export default PublishArticles;