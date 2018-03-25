import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { setSelectlable } from '../../../../../redux/actions/lable'

import './lable.scss'

class LabelOne extends Component{
	
	constructor(){
        super()
    }

    // shouldComponentUpdate(nextProp,nextState){
    //     // console.log(`LabelOne nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
    //     if( !$.isEmptyObject(nextProp) || nextState){
    //         return true;
    //     }
    //     return false;
    // }

    
        
	render(){
        console.log('我是 LabelOne 我被Render')
        let lableContent = this.props.content;
        let { dispatch } = this.props;

        let getLableColor = ()=>{
              return  '#' +    
                (function getRandomColor(color){    
                  return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])    
                  && (color.length == 6) ?  color : getRandomColor(color);    
                })('');    
        }

        const isMange = window.location.pathname.match('/admin');

        let removeBtn = <i onClick={ ()=>{} } className={`deleteIcon ${isMange?'':'hidden'}`} >X</i> 
           
        return (
            <div onClick={ isMange?()=>{}:()=>{ dispatch(setSelectlable(lableContent,0,10)) }} className="ui big label" style={{backgroundColor:getLableColor()}} key={lableContent} >
                {lableContent}
                {removeBtn}
            </div>
		)
	}
}

export default LabelOne;