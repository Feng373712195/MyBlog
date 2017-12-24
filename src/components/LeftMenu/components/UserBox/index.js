import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
 
import './user-box.scss'
import { setTimeout } from 'timers';

function reducer(state = {}, action) {
	switch (action.type) {
	  case 'showALB':
		return true;
	  case 'closeALB':
		return false;
	  default:
		return false;
	}
}

let store = createStore(reducer,{});


class LoginModal extends Component{

	constructor() {
		super()
		this.state = { 
			showAdminLoginBox: false,
			loginLoading:false,
			loginFlash:''
		}	
	}
	
	componentDidMount(){
		
	};

	componentDidUpdate() {

		var that = this;

		new Promise(function(resolve,reject){
			$('.modals').one('click',()=>{
				setTimeout(function(){
					resolve()
				},600)
			})
		})
		.then(function(){
			if( !$('.modals').hasClass('active') ){
				that.setState({
					showAdminLoginBox:false
				})
			}
		})
	}

	showAdminBox(){

		store.dispatch({
			type: 'showALB',
			s: true
		})

		let state = store.getState();
		this.setState({
			showAdminLoginBox:state
		})
	}

	closeAdminBox(){

		store.dispatch({
			type: 'closeALB',
			s: false
		})

		let state = store.getState();
		this.setState({
			showAdminLoginBox:state
		})
	}

	adminLogin(){
		var that = this;

		fetch('http://localhost:8080/admin/login',{ method: 'POST' })
		.then(function(res) {
			return res.json();
		})
		.then(function(body) {
			console.log(body)

			// if(body.code === 0){
			// 	window.location = '/'
			// }
			that.setState({
				loginLoading:true
			})
			setTimeout(()=>{
				
				that.setState({
					loginLoading:false,
					loginFlash:'登陆成功'
				})

				setTimeout(() =>
					$('.ui.modal')
					.modal('hide',function(){
						that.setState({
							showAdminLoginBox:false,
							loginFlash:''
						})
					})
				,500)

			},1000);
		});
	}

	render(){
		return (
			
			<div className="ui modal login-modal">
				<div className="header">
					{this.state.showAdminLoginBox?
						<div>
							<i onClick={this.closeAdminBox.bind(this)} className="iconfont icon-fanhui"></i>
							<span>Administrator Login</span>
						</div>
						:
						<p>请选择登陆方式</p>
					}
				</div>
				<div className="content" >
					{this.state.showAdminLoginBox?
						<div className="login-admin-box ui form">
						 	<div className="field">
							    <div className="two fields">
							      <div className="field">
								  	<label>Name</label>
							        <input type="text" name="adminName" placeholder="Administrator Name" />
							      </div>
							      <div className="field">
								  	<label>Password</label>
									<input type="password" name="passWord" placeholder="Password" />
							      </div>
							    </div>
						 	</div>
						 	<div className={"ui button " + (this.state.loginLoading?"loading":"") } onClick={this.adminLogin.bind(this)} tabindex="0">Submit</div>
							<span className="login-flash">{this.state.loginFlash}</span>
						</div>
						:
						<div className="login-btns">
							<button className="ui labeled icon button large login-github"  data-tooltip="GuiHub Login" >
								<i className="iconfont icon-github"></i>
								 GITHUB
							 </button>
							<button className="ui labeled icon button large login-qq"  data-tooltip="QQ Login" >
								<i className="iconfont icon-QQ"></i>
								 QQ
							 </button>
							<button onClick={this.showAdminBox.bind(this)} className="ui labeled icon button large login-admin" data-tooltip="Admin Login" >
								<i className="iconfont icon-guanwangicon31334"></i>
								 ADMIN
							</button>
						</div>
					}
				</div>
			</div>

		)
	}
}

class UserTipe extends Component{
	
	openMange(){
		window.location = '/admin/manage/publish/edit'
	}

	showModal(){
		$('.ui.modal')
		.modal('show')
	}

	render(){

		return (
			<div className="userInfo">
				<div className="user-photo"></div>
				<div className="user-name">吴泽锋</div>
				<div className="user-mail">373712195@qq.com</div>
				<button onClick={this.openMange.bind(this)} className="ui basic button">进入管理页面</button>
				<button className="ui primary button">注销</button>
			</div>

			// <div className="login-tipe">
			// 	<div>亲 你还没有登录哦~</div>
			// 	<button onClick={this.showModal.bind(this)}  className="ui basic button"><i className="iconfont icon-guanwangicon31334"></i> Login </button>
			// </div>
		)

	}
}

class UserBOX extends Component{
	
	constructor() {
		super()
	}

	


	render(){

		return (
			
			<div className="userbox">

				<LoginModal />
				<UserTipe  />

			</div>
		)	
	}
}

export default UserBOX;