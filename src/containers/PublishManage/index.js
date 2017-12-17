import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getAtricle,removeAtricle } from '../../js/fetch-atricle'

import './publishmanage.scss'
import OperateList from '../../components/OperateList'


class PublishManage extends Component{

	render(){
		return (
			<div id="PublishManage" className="container">
				<OperateList></OperateList>
			</div>
		)
	}
}

export default PublishManage;