import React, { Component } from 'react';
import ReactDOM from 'react-dom';
					
import OperateList from '../../components/OperateList'


class DraftManage extends Component{

	render(){
		return (
			<div id="PublishManage" className="container">
				<OperateList type="draft"></OperateList>
			</div>
		)
	}
}

export default DraftManage;