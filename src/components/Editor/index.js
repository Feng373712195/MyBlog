
/**
 * Props
 * 
 *  articleTitle  
 *  articleContent 
 *  articleLabels
 *  articleFiles
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './editor.scss'

import { funGetSelected,funTextAsTopic }  from './rang.js'
import { getAtricle,saveAtricle,updateAtricle,uploadFile } from '../../js/fetch-atricle'
import { getDraft,saveDraft,updateDraft,uploadDraftFile } from '../../js/fetch-draft'

import { markdown } from 'markdown';
import { getNowFormatDate } from '../../js/uilt'

class Editor extends Component{

	constructor(){
        super()
		this.state = { 
			showPreview:false,
			articleId:'',
            articleTitle:'',
			articleContent:'',
            articleLabels:[],
            articleFiles:[]
        }
    }

    componentWillMount(){

        this.setState({
			articleId:this.props.articleId?this.props.articleId:'',
            articleTitle:this.props.articleTitle?this.props.articleTitle:'',
            articleContent:this.props.articleContent?this.props.articleContent:'',
			articleLabels:this.props.articleLabels?this.props.articleLabels:[],
			articleFiles:this.props.articleFiles?this.props.articleFiles:[]
        })
    }

    componentWillReceiveProps(nextProp){
       
    }


	editArticle(content){
		this.setState({
			articleContent:$('.articlesbox')[0].value
		})
	}

	addLable(){

		let lable = $('.label-text').val();
		let articleLabels = this.state.articleLabels;


		if( articleLabels.length === 5 ){
			alert('一篇文章的标签不能超过五个');
			return;
		}

		if( lable === ''){
			alert('请输入标签');
			return;
		}
		
		if( lable.length > 10 ){
			alert('标签字数不宜超过10个字');
			return;
		}

		if( articleLabels.indexOf(lable)!= -1 ){
			alert(`已经添加标签${lable}，不能重复添加`);
			return;
		}
		
		articleLabels.push($('.label-text').val());
		this.setState({
			articleLabels:articleLabels
		},()=>{
			$('.label-text').val('')
		})
	}

	removeLabel(index){
		let articleLabels = this.state.articleLabels;
		articleLabels.splice(index,1);
		this.setState({
			articleLabels:articleLabels
		})
	}	

	removeFile(index){
		let articleFiles = this.state.articleFiles;
		articleFiles.splice(index,1);
		this.setState({
			articleFiles:articleFiles
		})
	}

	markItHandle(type,item){

		let icon = $(`.${item.icon.split(' ')[1]}`)
		let articlesbox = $('.articlesbox')[0]
		let textSelection = funGetSelected(articlesbox)

		switch(type){
			case 'bold' : 
				funTextAsTopic(articlesbox,`**${textSelection}**`)
				this.editArticle();
				break;
			case 'xieti' : 
				funTextAsTopic(articlesbox,`*${textSelection}*`)
				this.editArticle();
				break;
			case 'title' : 
				funTextAsTopic(articlesbox,`###${textSelection}`)
				this.editArticle();
				break;
			case 'quote' : 
				funTextAsTopic(articlesbox,`>${textSelection}`)
				this.editArticle();
				break;
			case 'code' : 
				funTextAsTopic(articlesbox,` \`\`\`javascript \n ${textSelection} \n \`\`\` `)
				this.editArticle();
				break;
			case 'commonlist' : 
				funTextAsTopic(articlesbox,`-${textSelection}`)
				this.editArticle();
				break;
			case 'numberlist' : 
				funTextAsTopic(articlesbox,`1.${textSelection}`)
				this.editArticle();
				break;
			case 'hyperlink':
				articlesbox.value += `[](http://)`
				this.editArticle();
				break;
			case 'picture':
				articlesbox.value += `![](http://)`
				this.editArticle();
				break;
			case 'video':
				articlesbox.value += `!![](http://)`
				this.editArticle();
				break;
			case 'clean':
				this.setState({
					articleContent:''
				},()=>{
					articlesbox.value = ''
				})
				break;
			case 'preview':
				this.setState({
					showPreview:!this.state.showPreview
				},function(){
					this.state.showPreview ? icon.addClass('active') : icon.removeClass('active')
				})
				break;
			default:
				break;
		}
	} 

	async publishArticle(type){		

		let query = {
			title:$('#articleTitle').val(),
			content:$('#articleContent').val(),
			lables:this.state.articleLabels,
			files:this.state.articleFiles
		}
		
		let atricleid
		let files = $('.attachment')[0].files

		let saveHandle,uploadFileHandle

		if(type === 'article'){
			saveHandle = saveAtricle
			uploadFileHandle = uploadFile
		}else{
			saveHandle = saveDraft
			uploadFileHandle = uploadDraftFile
		}
		
		await saveHandle(query)
			.then( data =>{
					atricleid = data._id
					alert('保存成功') 
			})
			.catch( e => { alert('保存失败，请稍后再试') } )
		
		//发布
		if( files.length > 0 ){
			await uploadFileHandle('http://localhost:8080/articles/upload',atricleid, $('.attachment')[0].files)
				  .catch( e => { alert('上传附件失败，请重新上传') }  )
		}

	}
	

	async updateArticle(){	
		
			let update = {
				title:$('#articleTitle').val(),
				content:$('#articleContent').val(),
				lables:this.state.articleLabels,
				files:this.state.articleFiles,
				lasttime:getNowFormatDate()
			}

			let updateHandle,uploadFileHandle;

			if(this.props.type === 'atricle'){
				updateHandle = updateAtricle
				uploadFileHandle = uploadFile
			}else{
				updateHandle = updateDraft
				uploadFileHandle = uploadDraftFile
			}
			


			await updateHandle({_id:this.state.articleId},update,false)
					.then( data =>{
						console.log(data)
						alert('修改成功') 
						this.props.refresh();
					})
					.catch( e => { alert('修改失败，请稍后再试') } )
			
			let oldUploadFile = await getAtricle({_id:this.state.articleId}).then( data => { return data[0].files } )

			if( JSON.stringify( oldUploadFile ) != JSON.stringify( this.state.articleFiles) ){
				await uploadFileHandle('http://localhost:8080/articles/updateUpload',this.state.articleId, $('.attachment')[0].files)
			}

	}

	getAllArticle(){

		getAtricle({})
		.then( data =>{ console.log(data) } )
		.catch( e => { console.log(e) } )
	}
	
	selectFilesBtn(){
		$('.attachment').click();
	}

	selectFiles(){
		let files = [...($('.attachment')[0].files)].map( file =>{ return {name:file.name,size:file.size} } )
		this.setState({articleFiles:files})
	}

	render(){

		const markIt = {
			font:{ 
				bold:{
					icon:'iconfont icon-bold',
					tooltip:"粗体",
					type:'bold'
				},
				xieti:{
					icon:'iconfont icon-xieti',
					tooltip:"斜体",
					type:'xieti'
				},
				title:{
					icon:'iconfont icon-biaoti',
					tooltip:"标题",
					type:'title'
				}
			},
			block:{
				quote:{
					icon:'iconfont icon-quote',
					tooltip:"引用",
					type:'quote'
				},
				code:{
					icon:'iconfont icon-ai-code',
					tooltip:"代码",
					type:'code'
				}
			},
			list:{
				commonlist:{
					icon:'iconfont icon-liebiao',
					tooltip:"普通列表",
					type:'commonlist'
				},
				numberlist:{
					icon:'iconfont icon-shuziliebiao',
					tooltip:"数字列表",
					type:'numberlist'
				}
			},
			link:{
				hyperlink:{
					icon:'iconfont icon-chaolianjie',
					tooltip:"超链接",
					type:'hyperlink'
				},
				picture:{
					icon:'iconfont icon-tupian',
					tooltip:"图片",
					type:'picture'
				},
				video:{
					icon:'iconfont icon-shipin',
					tooltip:"视频",
					type:'video'
				}
			},
			function:{
				clean:{
					icon:'iconfont icon-eraser',
					tooltip:"清空",
					type:'clean'
				},
				preview:{
					icon:'iconfont icon-yula',
					tooltip:"预览模式",
					type:'preview'
				}
			}
		}
				
		const markItList = [];

		for(let mod in markIt){
		    markItList.push(<li key={mod} className="cut"></li>)
			for(let item in markIt[mod]){
				let { icon:icon,tooltip:tooltip,type:type } = markIt[mod][item];
				markItList.push(<li onClick={this.markItHandle.bind(this,type,markIt[mod][item])} key={item} data-tooltip={tooltip} ><span className={icon} ></span></li>)
			}
		}

		let Lables = this.state.articleLabels.map( (label,index)=>{
						return	<div className="ui label large">
									<span>{label}</span>
									<i onClick={this.removeLabel.bind(this,index)} className="deleteIcon">X</i>
								</div>
					})

		let Files = this.state.articleFiles.map((file,index) =>{
						return <div className="file ui label large">
									<span className="file-name">{file.name}</span>
									<span className="file-size">{`${(parseInt(file.size/1024)).toLocaleString('en-US')}KB`}</span>
									{/* <span onClick={this.removeFile.bind(this,index)} className="file-del">X</span> */}
								</div>
					})

		return (
				<form className="ui form">

					<div className="field">
						<label>文章标题</label>
						<input id="articleTitle"  type="text" placeholder="文章标题..." defaultValue={this.props.articleTitle} />
					</div>

					<div className="field">
						<label>文章内容</label>

						<ul className="markIt-warp">
							{markItList.map(item => item)}
						</ul>

						<textarea id="articleContent" onChange={this.editArticle.bind(this)} defaultValue={this.props.articleContent} className="articlesbox" ></textarea>

						<div className={`preview-box ${this.state.showPreview?'':'hidden'}`}>
							<div className="preview-head">预览模式</div>
							<div className="preview-content" dangerouslySetInnerHTML={{__html:markdown.toHTML(this.state.articleContent) }} ></div>
						</div>
					</div>

					
					<div className="labelbox-warp">
						<div className="labelbox">
							{Lables}
						</div>

						<div className="ui right labeled left icon input">
							<i class="tags icon"></i>
							<input className="label-text" type="text" placeholder="输入标签" />
							<a onClick={this.addLable.bind(this)} className="ui tag label">
								添加标签
							</a>
						</div>

					</div>
					
					<div className="file-box">
						<div className="files">
							{Files}
						</div>	
						<button type="button" onClick={this.selectFilesBtn.bind(this)} className="ui basic button">上传附件</button>
						<input  type='file' onChange={this.selectFiles.bind(this)} multiple="true" className="attachment hidden" />
					</div>
					
					<div className="btns-warp">
						<div className="btns l" >
							{
								this.props.backhandle && 
								<button type="button" onClick={this.props.backhandle} className="ui green button" >返回</button>
							}
						</div>
						<div className="btns r" >
							{ this.props.manage  && <button type="button" onClick={this.updateArticle.bind(this)} className="ui green button">修改</button> }
							{ !this.props.manage && <button type="button" onClick={this.publishArticle.bind(this,'article')} className="ui green button">发布</button> }
							{ (this.props.manage && this.props.type === 'draft') && <button type="button" onClick={this.publishArticle.bind(this,'article')} className="ui green button">发布</button> }
							{ !(this.props.type === 'draft') &&  <button type="button" onClick={this.publishArticle.bind(this,'draft')} className="ui red button">保存</button> }
						</div>
					</div>

				</form>
		)	
	}
}

export default Editor;