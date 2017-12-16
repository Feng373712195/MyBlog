import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//依赖semantic-ui


class Modal extends Component{

    constructor(){
        super()
    }

    componentWillReceiveProps(nextProp){
        console.log(nextProp)
    }
    
    render(){
        return (
            <div class="ui modal">
                <div class="header">
                   { this.props.modalData.modalHead }
                </div>
                <div className="content">
                    {this.props.modalData.modalContent}
                </div>
                <div class="actions">
                    {
                        this.props.modalData.modalBtns.map((btn)=>{
                            return <div onClick={btn.handle} className={btn.class}>{btn.text}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

module.exports = Modal