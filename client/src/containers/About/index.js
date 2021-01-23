import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './about.scss'

class About extends Component{

	/**只渲染一次*/
	shouldComponentUpdate(nextProp,nextState){
		return false;
	}

	render(){

		return (
			<div id="About" className="container" >
				{/* <img className="me-pic" src="../../img/ME.png" /> */} 
				{/* <div className="about-content-warp"> */}
					<div className="about-content">
						<h1 className="about-title">WUZEFENG ——— 此博客博主</h1>
						<p >用了非常抠脚的技术完成了此博客，只为有个可以记录的地方</p>
						<h4>E-MAIL:373712195@qq.com</h4>
						<h4><a href="https://github.com/Feng373712195/MyBolg">博客GITHUB</a></h4>
						<h4><a href="https://juejin.im/user/58e3586e61ff4b00617a22fa">我的掘金</a></h4>
					</div>
				{/* </div> */}
			</div>
		)	
	}
}

export default About;