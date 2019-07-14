import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import './lables.scss'
import { getLables,cleanLables,setSelectlable } from '../../../redux/actions/lable'
import LableOne from './components/LableOne'

class Labels extends Component{
	
	constructor(){
		super();
		this.first = false;
	}

	// shouldComponentUpdate(nextProp,nextState){
	// 	// console.log(`LableOne nextProp${JSON.stringify(nextProp)} prop${JSON.stringify(this.props)} nextState${JSON.stringify(nextState)}  state${JSON.stringify(this.state)} `)
	// 	if( nextProp.lables == this.props.lables ){
    //         return true;
    //     }
    //     return false;
    // }

	componentWillMount(){
		const { dispatch } = this.props;
		dispatch(getLables());
	}

	componentWillUnmount(){
        let { dispatch } = this.props;
        dispatch( cleanLables() );
    }

	render(){

		console.log('我是 Labels 我被Render')

		const { lables,dispatch } = this.props;
		
        let Lables =  lables.map(lable => {
                         return <LableOne key={lable} content={lable} dispatch={ dispatch } ></LableOne>
                      })

		return (
            <div className="lable-warp">					
                {Lables}
            </div>
		)	
	}
}

function select(state) {
	console.log(state)
    return {
	  lables:state.lables.lablesReducer,
	  selectlable:state.lables.selectlable,
	  lableRelationArticles:state.lables.lableRelationArticles
    }
}

export default connect(select)(Labels)