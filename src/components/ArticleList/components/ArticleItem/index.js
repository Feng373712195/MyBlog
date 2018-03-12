import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { markdown } from 'markdown'

import './articleItem.scss' 


class articleItem extends Component{

    render(){
        let getArticleContent = ()=>{
            let div = document.createElement('div');
            /**列表时把 把图片src转成data-src  不加载图片*/
            div.innerHTML =  markdown.toHTML(this.props.article.content).replace(/src\=/g,'data-src=');
            return div.innerText
        }

        return(
            <article className="article-list">
                <h2 onClick={this.props.showArticle.bind(this,true,this.props.article)} className="article-title">{this.props.article.title}</h2>
                <div className="article-content">{ getArticleContent() }</div>
                <div className="artice-footer-warp">
                    <p className="artice-footer">
                        <span className="artice-author l">作者：{this.props.article.author}</span>
                        <span className="artice-read l">阅读量：{this.props.article.clicks}</span>
                        <span className="artice-createtime r">发布于：{this.props.article.createtime}</span>
                    </p>
                </div>
            </article>
        )
    }
}

module.exports = articleItem;