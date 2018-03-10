import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LableWarp from '../../components/LableWarp'

class Label extends Component{
	render(){
		return (
			<div id="Label" className="container">
				<LableWarp></LableWarp>
			</div>
		)	
	}
}

export default Label;