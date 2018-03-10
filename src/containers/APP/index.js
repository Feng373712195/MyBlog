import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'

import LeftMenu from '../../components/LeftMenu'
import Content from '../Content'

import { showNav,hidnNav } from './../../actions/titleNavAction'

class App extends Component{
    render(){
        return(
            <div>
                <LeftMenu></LeftMenu>
                <Content></Content>
            </div>
        )
    }
}

function select(state) {
    console.log(state);
    return {
      articles:state.articles,
      visibilityNav:state.visibilityNav
    }
  }

export default connect(select)(App)