import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './articleItem.scss' 

class articleItem extends Component{

    render(){
        return(
            <article className="article-list">
                <h2 onClick={this.props.showArticle.bind(this,true,this.props.article)} className="article-title">{this.props.article.title}</h2>
                <div className="article-content">{this.props.article.content}</div>
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