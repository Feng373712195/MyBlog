import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lables from '../Lables'
import { connect } from 'react-redux'

import './lablewarp.scss'

class LabelWarp extends Component{    
        
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