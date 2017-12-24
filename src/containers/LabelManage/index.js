import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Lables from '../../components/Lables'
import Modal from '../../components/Moadl'

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
						class:"ui positive right button"
						// handle:removeAtricleHandle.bind(this,{_id})
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
				<Lables manage="true" removeLable={this.removeBtn.bind(this)} ></Lables>
			</div>
		)	
	}
}

export default Label;