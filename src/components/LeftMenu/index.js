import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './left-menu.scss'

class LeftMenu extends Component{
	
	render(){
		const msg = 'Im leftMenu';
		return (
			<div className="menu-warp" >{msg}</div>
		)	
	}
}

export default LeftMenu;