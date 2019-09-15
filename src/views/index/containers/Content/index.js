import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import { Route,Redirect,Switch } from 'react-router-dom'

import Artice from '../Article'
import ArticeContent from '../ArticeContent'
import About from '../About'
import Lables from '../Lables'
// import Manege from '../../../../containers/MangeApp'

class Content extends Component{

    render(){
        
        return (
            <Fragment>
                <Switch>
                    {/* <Route path="/article" component={ Artice } />
                    <Route path="/label" component={ Label } /> 
                    <Route path="/about" component={ About } /> */}
                    
                    <Route path="/article" exact  component={ Artice } />
                    <Route path="/article/:id" exact component={ ArticeContent } />
                    
                    <Route path="/about" component={ About } />
                    <Route path="/lables" component={ Lables } />

                    <Redirect exact path="/" to={{pathname: '/article'}} />
                </Switch>
            </Fragment>
         )
    }
}

export default Content;