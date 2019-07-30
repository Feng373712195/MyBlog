import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import { Route,Redirect,Switch } from 'react-router-dom'

import Artice from '../Article'
// import Manege from '../../../../containers/MangeApp'

class Content extends Component{

    render(){
        
        return (
            <Fragment>
                <Switch>
                    {/* <Route path="/article" component={ Artice } />
                    <Route path="/label" component={ Label } /> 
                    <Route path="/about" component={ About } /> */}
                    <Route path="/article" component={ Artice } />
                    <Redirect path="/" to={{pathname: '/article'}} />
                </Switch>
            </Fragment>
         )
    }
}

export default Content;