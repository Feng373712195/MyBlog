import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  markdown from './../../../../../models/markdown'

import './articleItem.scss' 


class articleItem extends Component{

    render(){

        let getArticleContent = ()=>{
            let div = document.createElement('div');

            div.innerHTML =  markdown(this.props.article.content)
                             /**列表时把 把图片src转成data-src  不加载图片*/ 
                            .replace(/src\=/g,'data-src=')
                            /**过滤换行符 回车符*/
                            .replace(/\n\r/g,'')
                            /**文章列表只显示400个字 */
                            .substring(0,400);
            return div.innerText
        }

        const articleContent = getArticleContent();
        let isEllipsis = articleContent.length>=200?true:false; 

        console.log(`length${articleContent.length} isEllipsis${isEllipsis}`)

        return(
            <article className="article-list" >
                <h2 onClick={this.props.showArticle.bind(this,true,this.props.article)} className="article-title">{this.props.article.title}</h2>
                <div className={`article-content ${isEllipsis?'ellipsis':''}`}>{ articleContent }</div>
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