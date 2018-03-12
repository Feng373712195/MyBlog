import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import UserBox from'./components/UserBox' 
import MenuList from'./components/MenuList' 
import TitleNav from './components/TitleNav'

import { changeNavData,setNavActive } from './../../actions/titleNavAction'

import './left-menu.scss'

class LeftMenu extends Component{
	
	render(){
		
		const { dispatch, changeTitleNav } = this.props

		return (
			<div className="menu-warp" >
				<UserBox  />
				<MenuList />
				<TitleNav titleNav={this.props.titleNav}  
						  setTitleNavAction = { (oldindex,newindex) => dispatch(setNavActive(oldindex,newindex)) } 
						  changeTitleNavData = { data => dispatch(changeNavData(data)) } />
			</div>
		)	
	}
}


export default LeftMenu;