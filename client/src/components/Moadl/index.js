import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


//依赖semantic-ui
class Modal extends Component{

    shouldComponentUpdate(nextProp,nextState){
        // console.log(`Modal nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
        //判断nextProp.moalData.modalContent 是否调用了此组件,没有不render
        if( !$.isEmptyObject(nextProp) || nextState){
            return true;
        }
        return false;
    }

    render(){

        let { modaldata }  = this.props;
        modaldata = $.isEmptyObject(modaldata)?{modalHead:'',modalContent:'',modalBtns:[]}:modaldata;

        return (
            <div className="ui modal m-modal">
                <div className="header">
                   { modaldata.modalHead }
                </div>
                <div className="content">
                    {modaldata.modalContent}
                </div>
                <div className="actions">
                    {
                        modaldata.modalBtns.map((btn)=>{
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
        modaldata:state.global.modalRedcer
    }
}

export default connect(select)(Modal)
