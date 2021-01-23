
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
/*引入防止xss模块 对输入内容转义*/
import xss from 'xss'
// import { markdown } from 'markdown';

/*引入markdown */
import marked  from '@assets/js/markdown'
/*引入高亮风格样式*/
import 'highlight.js/styles/xcode.css'

import UploadImgModal from './components/UploadImgModal'
import './editor.scss'
import { funGetSelected,funTextAsTopic }  from './rang.js'
import { 
	getAtricle,
	saveAtricle,
	updateAtricle,
	uploadFile,
	uploadImg,
	getDraft,
	saveDraft,
	updateDraft,
	uploadDraftFile } from '@api'
import { getNowFormatDate } from '@uilts'

class Editor extends Component{

	constructor(){
		super()
		
		this.timeStamp = +new Date()
		this.state = {
			/* 生成一个时间戳*/ 
			timeStamp:this.timeStamp,
			showUploadImgModal:false,
			showPreview:false,
			articleId:'',
            articleTitle:'',
			articleContent:'',
            articleLabels:[],
            articleFiles:[]
		}
		  
    }

    async componentWillMount(){

		const { type,articleId } = this.props;
		if( articleId ){
			const article = type == 'atricle' ? await getAtricle({ _id:articleId }) : await getDraft({ _id:articleId })
			this.setState({
				articleId:article.data[0]._id,
				articleTitle:article.data[0].title,
				oldArticleContent:article.data[0].content,
				articleContent:article.data[0].content,
				articleLabels:article.data[0].lables,
				articleFiles:article.data[0].files,
				articleCreateTime:article.data[0].createtime
			})
		}
    }

    componentWillReceiveProps(nextProp){
       
    }


	editArticle(content){
		console.log( $('.articlesbox')[0].value,'change value' )
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
		
		articleLabels.push( xss($('.label-text').val()) );
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
				// articlesbox.value += `![](http://)`
				// this.editArticle();
				this.setState({
					showUploadImgModal:true
				})
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

		let regexp = new RegExp(`/articles/cacheuploadImg/${this.state.timeStamp}/`,'g')

		let query = {
			title:xss($('#articleTitle').val()),
			content:xss($('#articleContent').val().replace(regexp,'/articles/uploadImg/_id/')),
			lables:this.state.articleLabels,
			files:this.state.articleFiles,

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
		
		//上传图片
		await uploadImg(this.state.timeStamp,atricleid).
			  then( data => console.log(data))
			  .catch( err => console.log(err) )
		
		
		// 上传附件
		if( files.length > 0 ){
			await uploadFileHandle('/articles/upload',atricleid, $('.attachment')[0].files)
				  .catch( e => { alert('上传附件失败，请重新上传') }  )
		}

	}
	
	async updateArticle(){	
		
			let update = {
				title:xss($('#articleTitle').val()),
				content:xss($('#articleContent').val()),
				createtime:xss($('#articlePostDate').val()),
				lables:this.state.articleLabels,
				files:this.state.articleFiles,
				lasttime:getNowFormatDate(),
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
			
			let oldUploadFile = await getAtricle({_id:this.state.articleId})
			.then( res => { 
				return res.data[0].files 
			} )

			if( JSON.stringify( oldUploadFile ) != JSON.stringify( this.state.articleFiles) ){
				await uploadFileHandle('/articles/updateUpload',this.state.articleId, $('.attachment')[0].files)
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

	/** 获取上传图片地址 */
	getImgURL(url){
		let articlesbox = $('.articlesbox')[0];
		funTextAsTopic(articlesbox,`![](${url})`)
		this.editArticle();
	}

	/** 关闭上传图片弹出框 */
	closeModal(){
		this.setState({
			showUploadImgModal:false
		})
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
						return	<div key={label} className="ui label large">
									<span>{label}</span>
									<i onClick={this.removeLabel.bind(this,index)} className="deleteIcon">X</i>
								</div>
					})

		let Files = this.state.articleFiles.map((file,index) =>{
						return <div key={file.name} className="file ui label large">
									<span className="file-name">{file.name}</span>
									<span className="file-size">{`${(parseInt(file.size/1024)).toLocaleString('en-US')}KB`}</span>
									<span onClick={this.removeFile.bind(this,index)} className="file-del">X</span>
								</div>
					})

		return (
				<form className="ui form">

					<UploadImgModal isshow={this.state.showUploadImgModal} timeStamp={this.state.timeStamp} closeModal={this.closeModal.bind(this)} setImgURL={this.getImgURL.bind(this)} />
					
					<div className="field">
						<label>文章标题</label>
						<input id="articleTitle"  type="text" placeholder="文章标题..." defaultValue={this.state.articleTitle} />
					</div>
					{ /* 修改文章才可以修改发布时间 */ }
					{
						this.props.articleId &&
						<div className="field">
							<label>发布时间</label>
							<input id="articlePostDate" type="text" placeholder="文章发布时间" defaultValue={this.state.articleCreateTime} />
						</div>
					}

					<div className="field">
						<label>文章内容</label>

						<ul className="markIt-warp">
							{markItList.map(item => item)}
						</ul>

						<textarea id="articleContent" 
								  onChange={this.editArticle.bind(this)} 
								  defaultValue={this.state.oldArticleContent} 
								  value={this.state.articleContent}
								  className="articlesbox" >
						</textarea>

						<div className={`preview-box ${this.state.showPreview?'':'hidden'}`}>
							<div className="preview-head">预览模式</div>
							<div className="preview-content" dangerouslySetInnerHTML={{__html:marked(this.state.articleContent) }} ></div>
						</div>
					</div>

					
					<div className="labelbox-warp">
						<div className="labelbox">
							{Lables}
						</div>

						<div className="ui right labeled left icon input">
							<i className="tags icon"></i>
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
						<input  type='file' onChange={this.selectFiles.bind(this)} multiple className="attachment hidden" />
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