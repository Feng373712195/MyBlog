import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { setSelectlable,removeLable } from '@store/actions/lable'
import { modalState } from '@store/actions/global' 

import './lable.scss'

class LabelOne extends Component{
	
	constructor(){
        super()
    }

    removeBtn(lable){

		const that = this;
		let { dispatch } = this.props;

		const modalData = {
			modalHead:'删除提示?',	
			modalContent:`是否删除标签<${lable}> （删除此标签后，相关文章都会移除此标签）`,
			modalBtns:[
				{
					text:"取消",
					class:"ui black deny button"
				},
				{
					text:"确定",
					class:"ui positive right button",
					handle: dispatch.bind(that,removeLable({lable}))
				}
			]	
		}

        dispatch( modalState(modalData) )
	}

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
        
        const isMange = ~window.location.href.indexOf('manage');

        let removeBtn = <i onClick={ ()=>{ this.removeBtn( this.props.content ) } } 
                           className={`deleteIcon ${isMange?'':'hidden'}`} >X</i> 
           
        return (
            <div onClick={ isMange?()=>{}:()=>{ dispatch(setSelectlable(lableContent,1,10)) }} 
                 className="ui big label"
                 style={{backgroundColor:getLableColor()}} 
                 key={lableContent} >
                {lableContent}
                {removeBtn}
            </div>
		)
	}
}

export default LabelOne;