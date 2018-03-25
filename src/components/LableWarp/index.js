import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lables from '../Lables'
import { connect } from 'react-redux'
import { cleanLables } from '../../../redux/actions/lable'

import './lablewarp.scss'

class LabelWarp extends Component{    
    
    componentWillUnmount(){
        let { dispatch } = this.props;
        dispatch( cleanLables() );
    }
    
    render(){
        
        let { selectlable } = this.props;

        return(
            <div className={`lable-warp ${selectlable?'hidden':''}`}>
				<Lables></Lables>
            </div>
        )
    }

}

function select(state) {
    console.log(state)
    return {
	  selectlable:state.lables.selectlable
    }
}

export default connect(select)(LabelWarp)