import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


//依赖semantic-ui
class Loader extends Component{
    
    render(){
       
        let { loading }  = this.props;

        return (
            <div className={`ui ${loading?'active':'disabled'} dimmer`}>
                <div className="ui massive text loader">加载中</div>
            </div>
        )
    }
}

function select(state){
    return{
        loading:state.global.loadReducer
    }
}

module.exports = connect(select)(Loader)