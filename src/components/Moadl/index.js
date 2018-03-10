import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//依赖semantic-ui


class Modal extends Component{

    constructor(){
        super()
    }

    componentWillReceiveProps(nextProp){
        
    }
    
    render(){
        return (
            <div className="ui modal m-modal">
                <div className="header">
                   { this.props.modalData.modalHead }
                </div>
                <div className="content">
                    {this.props.modalData.modalContent}
                </div>
                <div className="actions">
                    {
                        this.props.modalData.modalBtns.map((btn)=>{
                            return <div key={btn.text} onClick={btn.handle} className={btn.class}>{btn.text}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

module.exports = Modal