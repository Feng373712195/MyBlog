import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserBox from'./components/UserBox' 
import MenuList from'./components/MenuList' 

import './left-menu.scss'

class LeftMenu extends Component{
	
	render(){
		return (
			<div className="menu-warp" >
				<UserBox />
				<MenuList />
			</div>
		)	
	}
}

export default LeftMenu;