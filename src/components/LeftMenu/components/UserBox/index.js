import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './user-box.scss'
 
class UserBOX extends Component{
	
	render(){
		return (
			<div className="userbox">
				<div className="user-photo"></div>
                <div className="user-name">吴泽锋</div>
                <div className="user-mail">373712195@qq.com</div>
			</div>
		)	
	}
}

export default UserBOX;