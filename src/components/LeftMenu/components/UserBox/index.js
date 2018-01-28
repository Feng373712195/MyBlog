import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
 
import './user-box.scss'
import { setTimeout } from 'timers';
import  Moadl from '../../../Moadl'

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
		console.log('componentDidMount')
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

	async adminLogin(){
		var that = this;

		that.setState({
			loginLoading:true
		})

		let loginRes = await fetch('http://localhost:8080/admin/login',{ method: 'POST' })
					   .then(function(res) {
						  return res.json();
					   })

		if(loginRes.code === 0){

			await new Promise((res,rej)=>{
				setTimeout(()=>{
				  that.setState({
					loginLoading:false,
					loginFlash:'登陆成功'
				  },function(){
					 res();	
				  })
				},1000)
			})

			await new Promise((res,rej)=>{
				setTimeout(() =>
					$('.ui.modal')
					.modal('hide',function(){
						that.setState({
							showAdminLoginBox:false,
							loginFlash:''
						})	
						that.props.getUsrData({name:'吴泽锋',email:'373712195@qq.com',head:'',isAdmin:true});
						res();
					})
				,500)
			})
		}

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
	
	componentWillReceiveProps(nextProps, nextState){
		console.log(nextProps)
	}

	openMange(){
		window.location = '/admin/manage/publish/edit'
	}

	showModal(){
		$('.login-modal')
		.modal('show')
	}

	render(){

		
		let usrData = this.props.userData;

		let AdminControl =  (this.props.userData && this.props.userData.isAdmin) &&
							<div>
								<button onClick={this.openMange.bind(this)} className="ui basic button">进入管理页面</button>
								<button onClick={this.props.logout.bind(this,usrData.name)} className="ui primary button">注销</button>
							</div>
		
		let UserBox = 	(this.props.userData) &&
						<div className="userInfo">
							<div className="user-photo"></div>
							<div className="user-name">{usrData.name}</div>
							<div className="user-mail">{usrData.email}</div>
							{AdminControl}
						</div>
		
		let LoginBox =  <div className="login-tipe">
							<div>亲 你还没有登录哦~</div>
							<button onClick={this.showModal.bind(this)}  className="ui basic button"><i className="iconfont icon-guanwangicon31334"></i> Login </button>
						</div>

		return (
			<div>
				{
					(usrData)? UserBox : LoginBox
				}
			</div>
		)

	}
}

class UserBOX extends Component{
	
	constructor() {
		super()
		this.state = {
			userData:null,
			modalData:{
				modalHead:'',
				modalContent:'',
				modalBtns:[]
			}
		}
	}

	getUsrData(userObj){
		this.setState({
			userData:userObj
		})
	}

	cleanUsrData(){
		this.setState({
			userData:null
		})
	}

	logout(username){

		this.setState({
			modalData:{
                modalHead:'注销提示?',	
                modalContent:`是否注销用户<${username}>`,
                modalBtns:[
                    {
                        text:"取消",
                        class:"ui black deny button"
                    },
                    {
                        text:"确定",
                        class:"ui positive right button",
                        handle:this.cleanUsrData.bind(this)
                    }
                ]	
            }
		},()=>{
            $('.m-modal')
            .modal('show');
        })
	}

	render(){

		return (
			
			<div className="userbox">
				<Moadl modalData={ this.state.modalData } ></Moadl>
				<LoginModal getUsrData = {this.getUsrData.bind(this)} />
				<UserTipe userData = {this.state.userData} logout={this.logout.bind(this)} />

			</div>
		)	
	}
}

export default UserBOX;