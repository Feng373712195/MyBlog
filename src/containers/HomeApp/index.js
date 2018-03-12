import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import LeftMenu from '../../components/LeftMenu'
import Content from '../Content'

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <LeftMenu {...this.props} ></LeftMenu>
                    <Content></Content>
                </div>
            </Router>
        )
    }
}

function select(state) {
    return {
      articles:state.articles,
      titleNav:state.changeTitleNav
    }
  }

export default connect(select)(App)