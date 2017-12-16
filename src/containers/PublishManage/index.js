import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getAtricle,removeAtricle } from '../../js/fetch-atricle'

import './publishmanage.scss'
import Modal  from '../../components/Moadl'

function removeAtricleHandle(query){
	removeAtricle(query)
	.then(() =>{
		console.log('删除成功');
		return getAtricle() 
	})
	.catch( e => { 
		console.error(e);
		alert('删除失败，请稍后再试;')
	})
	.then( data => {
		this.setState({ articles:data })
	})
	.catch( e => { 
		console.error(e);
		alert('重新获取失败，请稍后再试;')
	})
}

class PublishManage extends Component{
	
	constructor(){
		super()
		this.state = {
			articles:[],
			modalData:{
				modalHead:'',
				modalContent:'',
				modalBtns:[]
			}
		}

		getAtricle({})
		.then( data => { this.setState({ articles:data }) } )
		.catch( e => { alert('获取文章失败,请稍后再试！') } )
	}

	removeBtn(title){

		this.setState({

			modalData:{
				modalHead:'删除提示?',	
				modalContent:`是否删除文章<${title}>`,
				modalBtns:[
					{
						text:"取消",
						class:"ui black deny button"
					},
					{
						text:"确定",
						class:"ui positive right button",
						handle:removeAtricleHandle.bind(this,{title})
					}
				]	
			}

		},()=>{
			$('.ui.modal')
			.modal('show');
		})
	}

	render(){
		return (
			<div id="PublishManage" className="container">
				
				<Modal modalData={ this.state.modalData } ></Modal>

				{this.state.articles.map(article =>{
					return (<div className="article-box">
								<h3  className="">{article.title}</h3>
								<div className="r option">
								 <i onClick={this.removeBtn.bind(this,article.title)} className="iconfont icon-shanchu"></i>
								 <i className="iconfont icon-bianji"></i>
								</div>
							</div>)
				})}
			</div>
		)	
	}
}

export default PublishManage;