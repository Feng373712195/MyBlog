import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Route,Redirect,Switch } from 'react-router-dom'

import Artice from '../Article'
// import Manege from '../../../../containers/MangeApp'

class Content extends Component{

    render(){
        
        return (
            <section >
                <Switch>
                    {/* <Route path="/article" component={ Artice } />
                    <Route path="/label" component={ Label } /> 
                    <Route path="/about" component={ About } /> */}
                    <Route path="/article" component={ Artice } />
                    <Redirect path="/" to={{pathname: '/article'}} />
                </Switch>
            </section>
         )
    }
}

export default Content;