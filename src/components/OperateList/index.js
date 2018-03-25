import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getAtricle,removeAtricle } from '../../js/mfetch'
import { getDraft,removeDraft } from '../../js/mfetch'

import Modal  from '../Moadl'
import OperateItem from './OperateItem'
import Editor from '../Editor'

function removeAtricleHandle(query){

	let removeHandle;
	let getHandle;

	if(this.props.type === 'atricle' ){
		removeHandle = removeAtricle
		getHandle = getAtricle
	}else{
		removeHandle = removeDraft
		getHandle = getDraft
	}
	

	removeHandle(query)
	.then(() =>{
		console.log('删除成功');
		return getHandle() 
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

		this.loadAtricles = (type)=>{
			
			let getHandle;

			 if(type === 'atricle' ){
				 getHandle = getAtricle
			 }else{
				 getHandle = getDraft
			}
			
			getHandle({})
			.then( data => { console.log(data); this.setState({ articles:data }) } )
			.catch( e => { alert('获取文章失败,请稍后再试！') } )
		}

	}

	componentWillMount(){
		this.loadAtricles(this.props.type)
	}
	
	shouldComponentUpdate(nextProp,nextState){
		// console.log(`OperateList nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)

		if( !$.isEmptyObject(nextProp) || nextState){
            return true;
        }
        return false;
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

	//打开文章编辑器
	editBtn(articleData){
		this.setState({
			isEdit:true,
			articleData
		})
	}
	//返回文章列表
	editBack(){
		this.setState({
			isEdit:false,
			articleData:{}
		})
	}

    render(){

		console.log('我是 OperateList 我被Render')

		return (
			<div>
				{this.state.isEdit?
					<Editor backhandle={this.editBack.bind(this)} manage="true" type={this.props.type} refresh={this.loadAtricles.bind(this,this.props.type)}  articleId={this.state.articleData._id} articleTitle={this.state.articleData.title} articleContent={this.state.articleData.content} articleLabels={this.state.articleData.lables} articleFiles={this.state.articleData.files}></Editor>
					:
					<div>
						<Modal modalData={ this.state.modalData } ></Modal>
						{this.state.articles.map( article => <OperateItem key={article._id} articleData={article} removeHandle={this.removeBtn.bind(this)} editHandle={this.editBtn.bind(this)} ></OperateItem> )}
					</div>
				}
			</div>
		)	
	}
}

export default OperateList;