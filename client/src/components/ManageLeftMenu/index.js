import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MenuList from'./components/MenuList' 

import './manage-leftmenu.scss'

class ManageLeftMenu extends Component{
	
	render(){
		console.log('我是 ManageLeftMenu 我被Render')

		return (
			<div className="menu-warp" >
				<MenuList />
			</div>
		)	
	}
}

export default ManageLeftMenu;