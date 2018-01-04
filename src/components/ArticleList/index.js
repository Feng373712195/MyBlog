import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ArticleItem from './components/ArticleItem'
import ArticleContent from '../ArticleContent'

import { readAtricle } from '../../js/fetch-atricle'

class articleList extends Component{

    constructor(){
        super()

        this.state = {
            article:{},
            articles:[],
            showArticle:false
        }

        this.showArticle =(isShow,article)=>{
            this.setState({
                article:article,
                showArticle:isShow
            },()=>{
                readAtricle()
            })
        }
    }

    componentWillMount(){
        if(this.props.articles){

            this.setState({
                articles:this.props.articles
            })

        }else{
            
            fetch('/articles/find', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query:{}
                })
            })
            .then(res => res.json())
            .then(body => {
                console.log(body)
                if(body.code === 0){
                    this.setState({
                        articles:body.data
                    },()=>{
                        console.log(this.state.articles)
                    })
                }else{
                    alert('获取文章失败，请稍后再试');
                }  
            })
        }
    }

    render(){

        let Back = this.props.back && <div onClick={this.props.back.bind(this)} class="back">返回</div>
        let ArticleList  = this.state.articles.map( article =>
                                <ArticleItem article={article} showArticle={this.showArticle.bind(this)} ></ArticleItem>
                           )

        return(
            <div>
                {   
                    this.state.showArticle?
                    <ArticleContent article={this.state.article}  showArticle={this.showArticle.bind(this)} ></ArticleContent>
                    :
                    <div>
                        {Back}
                        {ArticleList}
                    </div>
                }
            </div>
        )
    }
}

module.exports = articleList
