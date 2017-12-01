import React,{ Component } from 'react'
import ReactDom from 'react-dom'
// import {Router,Route,browserHistory,hashHistory} from 'react-router'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'

import '../scss/home.scss'
import '../css/normalize.min.css'

import LeftMenu from '../components/LeftMenu'
import About from '../containers/About'
import Artice from '../containers/Article'
import Label from '../containers/Label'

class Content extends Component{

    render(){
		return (
            <Router>
                <div>
                  <div>
                      <Link to="/about">about</Link>
                  </div> 
                  <Route path="/about" component={ About } />
                  <Route path="/artice" component={ Artice } />
                  <Route path="/label" component={ Label } /> 
                </div>
            </Router>
         )
    }

}

// ReactDom.render(<LeftMenu />,document.querySelector('.leftmenu'))
ReactDom.render(<Content/>,document.querySelector('.content'))



if (module) {
    module['hot'].accept()  
}