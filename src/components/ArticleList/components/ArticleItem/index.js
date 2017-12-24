import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './articleItem.scss'

class articleItem extends Component{

    render(){
        return(
            <article className="article-box">
                <h2 className="article-title">{this.props.article.title}</h2>
                <div className="article-content">{this.props.article.content}</div>
                <p className="artice-footer">
                    <span className="artice-author l">{this.props.article.author}</span>
                    <span className="artice-createtime r">{this.props.article.createtime}</span>
                </p>
            </article>
        )
    }
}

module.exports = articleItem;