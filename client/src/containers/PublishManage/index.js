import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getAtricle,removeAtricle } from '@api';

import './publishmanage.scss'
import OperateList from '../../components/OperateList'


class PublishManage extends Component{

	render(){
		return (
			<div id="PublishManage" className="container">
				<OperateList type="atricle"></OperateList>
			</div>
		)
	}
}

export default PublishManage;