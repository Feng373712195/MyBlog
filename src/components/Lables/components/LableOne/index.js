import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './lable.scss'

class LabelOne extends Component{
	
	constructor(){
        super()
    }

    removeLable(){
        
    }
        
	render(){
        
        let lableContent = this.props.content

        let getLableColor = ()=>{
              return  '#' +    
                (function getRandomColor(color){    
                  return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])    
                  && (color.length == 6) ?  color : getRandomColor(color);    
                })('');    
        }

        let removeBtn = this.props.manage && <i onClick={this.props.removeLable.bind(this,lableContent) } className="deleteIcon">X</i> 
           
        return (
            <div onClick={this.props.manage?()=>{}:this.props.LableHandle.bind(this,lableContent)} className="ui big label" style={{backgroundColor:getLableColor()}} key={lableContent}>
                {lableContent}
                {removeBtn}
            </div>
		)
	}
}

export default LabelOne;