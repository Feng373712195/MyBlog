import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import *  as r from 'react-router';
import Lables from '../../components/Lables'
console.log( r )
class Label extends Component{

	constructor(){
		super()
	}

	shouldComponentUpdate(nextProp,nextState){
		if( !$.isEmptyObject(nextProp) || nextState){
            return true;
        }
        return false;
	}

	render(){
		return (
			<div id="LabelManage" className="container">
				{/* <Lables ref="lables" manage="true" removeLable={this.removeBtn.bind(this)} ></Lables> */}
				<Lables></Lables>
			</div>
		)	
	}
}

export default Label;