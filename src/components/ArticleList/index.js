import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ArticleItem from './components/ArticleItem'

class articleList extends Component{

    constructor(){
        super()

        this.state = {
            articles:[]
        }
    }

    componentWillMount(){
        console.log(this.props.articles)

        if(this.props.articles){

            this.setState({
                articles:this.props.articles
            })

        }else{
            fetch('/admin/publish/articles/find', {
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
                                <ArticleItem article={article} ></ArticleItem>
                           )

        return(
            <div>
                {Back}
                {ArticleList}
            </div>
        )
    }
}

module.exports = articleList
