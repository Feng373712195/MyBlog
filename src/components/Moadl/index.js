import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


//依赖semantic-ui
class Modal extends Component{

    constructor(){
        super()
    }

    shouldComponentUpdate(nextProp,nextState){
        // console.log(`Modal nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
        //判断nextProp.moalData.modalContent 是否调用了此组件,没有不render 
        if( !$.isEmptyObject(nextProp) || nextState){
            return true;
        }
        return false;
    }
    
    render(){
       
        let { modalData }  = this.props;
        modalData = $.isEmptyObject(modalData)?{modalHead:'',modalContent:'',modalBtns:[]}:modalData;

        return (
            <div className="ui modal m-modal">
                <div className="header">
                   { modalData.modalHead }
                </div>
                <div className="content">
                    {modalData.modalContent}
                </div>
                <div className="actions">
                    {
                        modalData.modalBtns.map((btn)=>{
                            return <div key={btn.text} onClick={btn.handle} className={btn.class}>{btn.text}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

function select(state){
    return{
        modaldata:state.global.moadlRedcer
    }
}

module.exports = connect(select)(Modal)