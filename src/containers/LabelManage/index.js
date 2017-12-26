import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Lables from '../../components/Lables'
import Modal from '../../components/Moadl'

function removeAtricleHandle(lable){

	fetch('http://localhost:8080/lable/removeLable', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify({lable})
	})
	.then(res => {return res.json()})
	.then(body => {
		if(body.code === 0) 
			this.refs.lables.loadLables();
	})
}


class Label extends Component{

	constructor(){
		super()
		this.state={
			modalData:{
				modalHead:'',
				modalContent:'',
				modalBtns:[]
			}
		}
	}

	removeBtn(lable){
		
		this.setState({

			modalData:{
				modalHead:'删除提示?',	
				modalContent:`是否删除标签<${lable}> （删除此标签后，相关文章都会移除此标签）`,
				modalBtns:[
					{
						text:"取消",
						class:"ui black deny button"
					},
					{
						text:"确定",
						class:"ui positive right button",
						handle:removeAtricleHandle.bind(this,{lable})
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
			<div id="LabelManage" className="container">
				<Modal modalData={ this.state.modalData } ></Modal>
				<Lables ref="lables" manage="true" removeLable={this.removeBtn.bind(this)} ></Lables>
			</div>
		)	
	}
}

export default Label;