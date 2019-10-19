import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { adminlogin } from '@api'
import { loadState,modalState,errorState,loginloadState,changeloginFlash,initloginFlash,showadminlogin,hideadminlogin } from '@store/actions/global'
import { getUserdata } from '@store/actions/user'

/** 登陆弹出框组件 */
class LoginModal extends Component{

	componentDidMount(){
		$('.login-modal').modal('show')
	}

	componentDidUpdate() {
		const that = this;
		const { dispatch } = this.props
	}

	async adminLogin(){

		var that = this;
		const { dispatch } = this.props

		var username =  $("input[name='adminName']").val();
		var password =   $("input[name='passWord']").val();

		var xssExpReg = new RegExp(/^[^#%&*\/|:<>?\"]*$/,'g') 

		if( username.length  === 0  ){
			dispatch( changeloginFlash( {color:'red',text:'请输入Name'} ) )
			return;
		}
		if( password.length  === 0 ){
			dispatch( changeloginFlash( {color:'red',text:'请输入PassWorld'} ) )
			return;
		}
		if( !xssExpReg.test(username) ){
			dispatch( changeloginFlash({color:'red',text:' Name 不得含有 # % & * \ / | : < > ? \" '} ) )
			return;
		}
		// if( !xssExpReg.test(password) ){
		// 	dispatch( changeloginFlash( {color:'red',text:' PassWorld 不得含有 # % & * \ / | : < > ? \" '} ) )
		// 	return;
		// }

		dispatch( loginloadState(true) )
		
		await adminlogin()
			 .then(()=>setTimeout(()=>{
				dispatch( loginloadState(false) )
				dispatch( changeloginFlash({color:'green',text:'登陆成功'}) )
				dispatch( showadminlogin() )
			 },1000))
			 .then(()=>setTimeout(() =>{
				$('.ui.modal').modal('hide',()=>{
					// dispatch( hideadminlogin() )
					dispatch( initloginFlash() )
					dispatch( getUserdata({name:'吴泽锋',email:'373712195@qq.com',head:'',isAdmin:true}) )
				})
			 },500))
			 .catch((e)=>{
				dispatch( loginloadState(false) )
				dispatch( errorState(e) )
			 })
	}

	render(){
		const { dispatch,adminlogin,modaldata,loginload,loginflash } = this.props;
		return (
			<div className="ui modal login-modal">
				<div className="header">
					{/**login-admin*/}
					<div>
						{/* <i onClick={ ()=>{ dispatch(  hideadminlogin() ) } } className="iconfont icon-fanhui"></i> */}
						<span>Administrator Login</span>
					</div>
					{/**plain-login*/}
					{/* <p className={`${adminlogin?'hidden':''}`} >请选择登陆方式</p> */}
				</div>
				<div className="content" >
					{/** login-admin */}
					<div className={`login-admin-box ui form`}>
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
						<div className={"ui button " + (loginload?"loading":"") } onClick={this.adminLogin.bind(this)}>Submit</div>
						<span className="login-flash" style={{color:loginflash.color}} >{loginflash.text}</span>
					</div>
					{/** login-btns */}
					{/* <div className={`login-btns ${adminlogin?'hidden':''}`}>
						<button className="ui labeled icon button large login-github"  data-tooltip="GuiHub Login" >
							<i className="iconfont icon-github"></i>
								GITHUB
							</button>
						<button className="ui labeled icon button large login-qq"  data-tooltip="QQ Login" >
							<i className="iconfont icon-QQ"></i>
								QQ
							</button>
						<button onClick={ ()=>{ dispatch( showadminlogin() ) } } className="ui labeled icon button large login-admin" data-tooltip="Admin Login" >
							<i className="iconfont icon-guanwangicon31334"></i>
								ADMIN
						</button>
					</div> */}
				</div>
			</div>
		)
	}
}

function select(state){
	return {
		adminlogin:state.global.adminloginRedcer,
		modaldata:state.global.moadlRedcer,
		loginflash:state.global.loginflashRedcer,
		loginload:state.global.loginloadRedcer
	}
}

export default  connect(select)(LoginModal);