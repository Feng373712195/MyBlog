import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './pulish-articles.scss'

import { funGetSelected,funTextAsTopic }  from '../../js/rang.js'
import { markdown } from 'markdown';

class PublishArticles extends Component{

	constructor(){
		super()
		this.state = { 
			articleContent:'',
			showPreview:false,
			labels:[]
		}
	}

	componentDidMount(){
 
	}


	editArticle(content){
		this.setState({
			articleContent:$('.articlesbox')[0].value
		})
	}

	addLable(){
		let labels = this.state.labels;
		labels.push($('.lable-text').val());
		this.setState({
			labels:labels
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
				articlesbox.value += `<br/> !![](http://)`
				this.editArticle();
				break;
			case 'clean':
				this.setState({
					articleContent:''
				},function(){
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
		

		
		let markItList = [];

		for(let mod in markIt){
		markItList.push(<li className="cut"></li>)
			for(let item in markIt[mod]){
				let { icon:icon,tooltip:tooltip,type:type } = markIt[mod][item];
				markItList.push(<li onClick={this.markItHandle.bind(this,type,markIt[mod][item])}  data-tooltip={tooltip} ><span className={icon} ></span></li>)
			}
		}

		return (
			<div id="PublishArticles" className="container" >

				<form className="ui form">

					<div className="field">
						<label>文章标题</label>
						<input name="first-name" type="text" placeholder="文章标题..." />
					</div>

					<div className="field">
						<label>文章内容</label>

						<ul className="markIt-warp">
							{markItList.map(item => item)}
						</ul>

						<textarea onInput={this.editArticle.bind(this)}  className="articlesbox"></textarea>

						<div className={`preview-box ${this.state.showPreview?'':'hidden'}`}>
							<div className="preview-head">预览模式</div>
							<div className="preview-content" dangerouslySetInnerHTML={{__html:markdown.toHTML(this.state.articleContent) }} ></div>
						</div>
					</div>


					<div className="lablebox-warp">
						<div className="lablebox">
							{this.state.labels.map(lable=>{
								console.log(lable);

								return	<div className="ui label">
											<span>{lable}</span>
											<i className="deleteIcon">X</i>
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

					<div className="btns" >
						<button className="ui green button">发布</button>
						<button className="ui red button">保存</button>
					</div>

				</form>
				
			</div>
		)	
	}
}

export default PublishArticles;