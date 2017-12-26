import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './lables.scss'

import LableOne from './components/LableOne'

class Labels extends Component{
	
	constructor(){
		super()

		this.state = {
            lables:[]
		}
		
		this.loadLables = ()=>{
			fetch('http://localhost:8080/lable/getAllLable', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
					}
			})
			.then(res => {return res.json()})
			.then(body => {
				if(body.code === 0) 
				 this.setState({
				   lables:body.lables
				 })
			})
		}

		this.loadLables();
    }
    
    LableHandle(lable){

		fetch(`http://localhost:8080/admin/publish/articles/find`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
		},
		body:JSON.stringify({query:{lables:lable}})
		})
		.then(res => {return res.json()})
		.then(body => {
			if(body.code === 0){
				this.props.LableController(body.data,true);
			}
		})
    }


	render(){

        let Lables =  this.state.lables.map(lable => {
                         let one = this.props.manage?
                            <LableOne key={lable} manage="true" removeLable={this.props.removeLable.bind(this)} content={lable}></LableOne>
                            :
                            <LableOne key={lable} LableHandle={this.LableHandle.bind(this)} content={lable}></LableOne>
                         return one
                      })

		return (
            <div className="lable-warp">					
                {Lables}
            </div>
		)	
	}
}

export default Labels;