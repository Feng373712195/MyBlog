import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './user-box.scss'
 
class UserBOX extends Component{
	
	constructor() {
		super()
		this.state = { }
	}

	showModal() {
		$('.ui.modal')
		.modal('show')
	  ;
	}

	AdminLogin(){
		console.log('Admin Login')
	}

	render(){
		return (
			
			<div className="userbox">

				<div className="ui modal login-modal">
					<div className="header">请选择登陆方式</div>
					<div className="content" >

						<button className="ui labeled icon button large login-github"  data-tooltip="GuiHub Login" >
							<i className="iconfont icon-github"></i>
							 GITHUB
						 </button>
						<button className="ui labeled icon button large login-qq"  data-tooltip="QQ Login" >
							<i className="iconfont icon-QQ"></i>
							 QQ
						 </button>
						<button onClick={this.AdminLogin} className="ui labeled icon button large login-admin" data-tooltip="Admin Login" >
							<i className="iconfont icon-guanwangicon31334"></i>
							 ADMIN
						 </button>

						 <div className="login-Admin-box">
							
						</div>
						
					</div>
				</div>

				<div className="login-tipe">
					<div>亲 你还没有登录哦~</div>
					<button onClick={this.showModal.bind(this)}  className="ui basic button"><i className="iconfont icon-guanwangicon31334"></i> Login </button>
				</div>

			</div>
		)	
	}
}

export default UserBOX;