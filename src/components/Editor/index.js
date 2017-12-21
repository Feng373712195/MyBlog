
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
import { getAtricle,saveAtricle,uploadFile } from '../../js/fetch-atricle'
import { markdown } from 'markdown';

class Editor extends Component{

	constructor(){
        super()
		this.state = { 
            showPreview:false,
            articleTitle:'',
			articleContent:'',
            articleLabels:[],
            articleFiles:[]
        }
    }

    componentWillMount(){
        this.setState({
            articleTitle:this.props.articleTitle?this.props.articleTitle:'',
            articleContent:this.props.articleContent?this.props.articleContent:'',
            articleLabels:this.props.articleLabels?this.props.articleLabels:[],
            
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
		if($('.label-text').val() === ''){
			alert('请输入标签');
			return;
		}
		
		let articleLabels = this.state.articleLabels;
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

	async publishArticle(){		

		let query = {
			title:$('#articleTitle').val(),
			content:$('#articleContent').val(),
			articleLabels:this.state.articleLabels,
			flise:[]
		}
		
		let atricleid 

		await saveAtricle(query)
			  .then( data =>{
				  	atricleid = data._id
					alert('保存成功') 
			   })
			  .catch( e => { alert('保存失败，请稍后再试') } )

		await uploadFile('http://localhost:8080/admin/publish/articles/upload',atricleid, $('.attachment')[0].files)
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
		
		// for(let file of files){
			
		// 	let fileNmae = file.name;
		// 	let nameList = fileName.split('.');
		// 	let SuffixName = `${Math.random().toString(16).substr(2)}.${nameList[nameList.length - 1]}`
			
		// 	file.name = SuffixName;
		// 	file.fileName = fileNmae;
		// }

		let [...files] = $('.attachment')[0].files
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
		    markItList.push(<li className="cut"></li>)
			for(let item in markIt[mod]){
				let { icon:icon,tooltip:tooltip,type:type } = markIt[mod][item];
				markItList.push(<li onClick={this.markItHandle.bind(this,type,markIt[mod][item])}  data-tooltip={tooltip} ><span className={icon} ></span></li>)
			}
		}

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
							{this.state.articleLabels.map( (label,index)=>{
								return	<div className="ui label large">
											<span>{label}</span>
											<i onClick={this.removeLabel.bind(this,index)} className="deleteIcon">X</i>
										</div>
							}) }
						</div>

						<div className="ui right labeled left icon input">
							<i class="tags icon"></i>
							<input className="label-text" type="text" placeholder="输入标签" />
							<a onClick={this.addLable.bind(this)} class="ui tag label">
								添加标签
							</a>
						</div>

					</div>
					
					<div className="file-box">
						<div className="files">
							{
								this.state.articleFiles.map((file,index) =>{
									return <div className="file ui label large">
												<span className="file-name">{file.fileName}</span>
												<span className="file-size">{`${(parseInt(file.size/1024)).toLocaleString('en-US')}KB`}</span>
												{/* <span onClick={this.removeFile.bind(this,index)} className="file-del">X</span> */}
											</div>
								})
							}
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
							<button type="button" onClick={this.publishArticle.bind(this)} className="ui green button">发布</button>
							<button type="button" onClick={this.getAllArticle.bind(this)} className="ui red button">保存</button>
						</div>
					</div>

				</form>
		)	
	}
}

export default Editor;