import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './title-nav.scss'

export class TitleNav extends Component{
   
    scrollPage(scrollnum){
        window.scroll(0,scrollnum);
    }
   
    render(){
        return(
            <div>
                {
                    this.state.titleNav.map((title,idx) =>{
                    return <div onClick={this.scrollPage.bind(this,title.scrollTop)} key={idx}>
                                {title.name}
                        </div>
                    })
                }
            </div>
        )
    }
}

