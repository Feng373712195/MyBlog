import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { markdown } from 'markdown';

import './articleContent.scss'


class articleContent extends Component{

    constructor(){
        super()
        this.state = {
            article:{}
        }
    }

    componentWillMount(){

        this.setState({
            article:this.props.article
        })
    }

    downFile(id,fileName){
        
    }

    render(){

        let Lables = this.state.article.lables.map( (label,index)=>{
                        return	<div key={label} className="ui blue label large">
                                    <span>{label}</span>
                                </div>
                     }) 
        
        let Files = this.state.article.files.map((file,index) =>{
                        return <a href={`http://localhost:8080/articles/down/${this.state.article._id}/${file.name}`} className="file ui label large">
                                    <span className="file-name">{file.name}</span>
                                    <span className="file-size">{`${(parseInt(file.size/1024)).toLocaleString('en-US')}KB`}</span>
                               </a>
                    })

        return(
           <article className="article-warp">
                <div className="article-back" onClick={this.props.showArticle.bind(this,false,{})} > &lt;&lt;文章列表</div>
                <div className="article-box">
                    <div className="article-title">{this.state.article.title}</div>
                    <div className="article-lable">{Lables}</div>
                    <div className="article-body" dangerouslySetInnerHTML={{__html:markdown.toHTML(this.state.article.content) }} ></div>
                    <div className="article-flies">
                        { this.state.article.files.length != 0 && <h1 class="ui header">附件</h1> }
                        {Files}
                    </div>
                </div>
           </article >
        )
    }
}

module.exports = articleContent;