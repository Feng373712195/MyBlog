import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Route } from 'react-router-dom'

import About from '../About'
import Artice from '../Article'
import Label from '../Label'

class Content extends Component{

    render(){
		return (
            <div className="content"> 
                <Route path="/about" component={ About } />
                <Route path="/article" component={ Artice } />
                <Route path="/label" component={ Label } /> 
            </div>
         )
    }
}

export default Content;