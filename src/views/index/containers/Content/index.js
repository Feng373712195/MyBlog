import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import { Route,Redirect,Switch } from 'react-router-dom'

import Artice from 'lazy!../Article'
import ArticeContent from 'lazy!../ArticeContent'
import About from 'lazy!../About'
import Lables from 'lazy!../Lables'

class Content extends Component{

    render(){
        
        return (
            <Fragment>
                <Switch>
                    <Route path="/article" exact  component={ Artice } />
                    <Route path="/article/:id" exact component={ ArticeContent } />
                    <Route path="/about" component={ About } />
                    <Route path="/labels" component={ Lables } />
                    <Redirect exact path="/" to={{pathname: '/article'}} />
                </Switch>
            </Fragment>
         )
    }
}

export default Content;