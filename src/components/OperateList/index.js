import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	getAtricle,
	getAtricleList,
	removeAtricle,
	getDraft,
	getDraftList,
	removeDraft } from '@api'
import { modalState } from '@store/actions/global' 
	
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
		return getHandle({},1,10) 
	})
	.catch( e => { 
		console.error(e);
		alert('删除失败，请稍后再试;')
	})
	.then( data => {
		this.setState({ articles:data.data })
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
			isEdit:false
		}

		this.loadAtricles = (type)=>{
			
			let getHandle;

			if(type === 'atricle' ){
				 getHandle = getAtricleList
			}else{
				getHandle = getDraftList
			}
			
			getHandle({},1,10)
			.then( data => { console.log(data); this.setState({ articles:data.data }) } )
			.catch( e => { alert('获取文章失败,请稍后再试！') } )
		}

	}

	componentWillMount(){
		this.loadAtricles(this.props.type)
	}
	
	shouldComponentUpdate(nextProp,nextState){
		if( !$.isEmptyObject(nextProp) || nextState){
            return true;
        }
        return false;
    }
    
	removeBtn(title,_id){

		const { dispatch } = this.props;

		const modalData = {
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
		dispatch( modalState(modalData) )
		 
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

		return (
			<div>
				{this.state.isEdit?
					<Editor backhandle={this.editBack.bind(this)} 
							manage="true" 
							type={this.props.type} 
							refresh={this.loadAtricles.bind(this,this.props.type)}  
							articleId={this.state.articleData._id} >
					</Editor>
					:
					<div>
						{this.state.articles.map( article => 
							<OperateItem key={article._id} 
										 articleData={article} 
										 removeHandle={this.removeBtn.bind(this)} 
										 editHandle={this.editBtn.bind(this)} >
							</OperateItem> )}
					</div>
				}
			</div>
		)	
	}
}

export default connect(()=>({}))(OperateList);