import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import './articleContent.scss'

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
        return(
           <div>{this.state.article.title}</div>
        )
    }
}

module.exports = articleContent;