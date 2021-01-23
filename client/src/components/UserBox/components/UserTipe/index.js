import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getUserdata,cleanUserdata } from '../../../../../redux/actions/user'

/** 展示用户组件 */
class UserTipe extends Component{

	openMange(){
		window.location = '/admin/manage/publish/edit'
	}

	showModal(){
		$('.login-modal').modal('show')
	}

	render(){
		console.log('我是 UserTipe 我被Render')
		
		let { userdata,dispatch } = this.props;

		let AdminControl =  (!$.isEmptyObject(userdata) && this.props.userdata.isAdmin) &&
							<div>
								<button onClick={this.openMange.bind(this)} className="ui basic button">进入管理页面</button>
								<button onClick={()=>{ dispatch(cleanUserdata()) }} className="ui primary button">注销</button>
							</div>
		
		let UserBox = 	(!$.isEmptyObject(userdata)) &&
						<div className="userInfo">
							<div className="user-photo"></div>
							<div className="user-name">{userdata.name}</div>
							<div className="user-mail">{userdata.email}</div>
							{AdminControl}
						</div>
		
		let LoginBox =  <div className="login-tipe">
							<div>亲 你还没有登录哦~</div>
							<button onClick={this.showModal.bind(this)}  className="ui basic button"><i className="iconfont icon-guanwangicon31334"></i> Login </button>
						</div>

		
		
		return (
			<div>
				{
					(!$.isEmptyObject(userdata))? UserBox : LoginBox
				}
			</div>
		)

	}
}


function select(state){
	console.log(state)
	return {
		userdata:state.userdata
	}
}

export default connect(select)(UserTipe);