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

    render(){

        var Lables = this.state.article.lables.map( (label,index)=>{
                        return	<div key={label} className="ui blue label large">
                                    <span>{label}</span>
                                </div>
                     }) 

        return(
           <article className="article-warp">
                <div className="article-box">
                    <div className="article-title">{this.state.article.title}</div>
                    <div className="article-lable">{Lables}</div>
                    <div className="article-body" dangerouslySetInnerHTML={{__html:markdown.toHTML(this.state.article.content) }} ></div>
                </div>
           </article >
        )
    }
}

module.exports = articleContent;