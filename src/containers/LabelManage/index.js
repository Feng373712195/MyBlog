import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Lables from '../../components/Lables'
import Modal from '../../components/Moadl'

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
				{/* <Modal modalData={ this.state.modalData } ></Modal> */}
				<Modal></Modal>
				{/* <Lables ref="lables" manage="true" removeLable={this.removeBtn.bind(this)} ></Lables> */}
				<Lables></Lables>
			</div>
		)	
	}
}

export default Label;