import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getAtricle,removeAtricle } from '../../js/fetch-atricle'

import Modal  from '../Moadl'
import OperateItem from './OperateItem'
import Editor from '../Editor'

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

class OperateList extends Component{
	
	constructor(){
		super()
		this.state = {
			articles:[],
			articlesData:{},
			isEdit:false,
			modalData:{
				modalHead:'',
				modalContent:'',
				modalBtns:[]
			}
		}

		getAtricle({})
		.then( data => { console.log(data); this.setState({ articles:data }) } )
		.catch( e => { alert('获取文章失败,请稍后再试！') } )
    }
    
    
	removeBtn(title,_id){
    
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
                        handle:removeAtricleHandle.bind(this,{_id})
                    }
                ]	
            }

        },()=>{
            $('.ui.modal')
            .modal('show');
        })
	}
	
	editBtn(articleData){
		this.setState({
			isEdit:true,
			articleData
		})
	}

	editBack(){
		this.setState({
			isEdit:false,
			articleData:{}
		})
	}

    render(){


		return (
			<div>
				{this.state.isEdit?
					<Editor backhandle={this.editBack.bind(this)} articleTitle={this.state.articleData.title} articleContent={this.state.articleData.content} articleLabels={this.state.articleData.labels} articleFiles={this.state.articleData.files}></Editor>
					:
					<div>
						<Modal modalData={ this.state.modalData } ></Modal>
						{this.state.articles.map( article => <OperateItem articleData={article} removeHandle={this.removeBtn.bind(this)} editHandle={this.editBtn.bind(this)} ></OperateItem> )}
					</div>
				}
			</div>
		)	
	}
}

export default OperateList;