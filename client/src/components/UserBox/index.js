import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Moadl from '../Moadl'
import LoginModal from './components/LoginModal'
import UserTipe from './components/UserTipe'
import './user-box.scss'

/** 用户模块容器组件 */
class UserBOX extends Component{

	shouldComponentUpdate(nextProp,nextState){
		// console.log(`LoginModal nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
		if( !$.isEmptyObject(nextProp) || nextState){
            return true;
        }
        return false;
    }
	
	constructor() {
		super()
		this.state = {
			// userData:null,
			// modalData:{
			// 	modalHead:'',
			// 	modalContent:'',
			// 	modalBtns:[]
			// }
		}
	}

	getUsrData(userObj){
		this.setState({
			userData:userObj
		})
	}

	cleanUsrData(){
		var that = this;

		this.setState({
			userData:null
		})
	}

	logout(username){

		// this.setState({
		// 	modalData:
		// },()=>{
           
		// })
		
		// {
		// 	modalHead:'注销提示?',	
		// 	modalContent:`是否注销用户<${username}>`,
		// 	modalBtns:[
		// 		{
		// 			text:"取消",
		// 			class:"ui black deny button"
		// 		},
		// 		{
		// 			text:"确定",
		// 			class:"ui positive right button",
		// 			handle:this.cleanUsrData.bind(this)
		// 		}
		// 	]	
		// }
	}

	render(){
		console.log('我是 UserBOX 我被Render')

		return (
			
			<div className="userbox">
				<Moadl></Moadl>
				{/* <LoginModal getUsrData = {this.getUsrData.bind(this)} /> */}
				<LoginModal/>
				{/* <UserTipe userData = {this.state.userData} logout={this.logout.bind(this)} /> */}
				<UserTipe />
			</div>
		)	
	}
}

export default UserBOX;