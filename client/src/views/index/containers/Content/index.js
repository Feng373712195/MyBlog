import React from 'react'
import { Route,Redirect,Switch } from 'react-router-dom'

import Artice from '../Article'
import ArticeContent from '../ArticeContent'
import About from '../About'
import Lables from '../Lables'

import './style.scss';

function Content(){
    return <div className="content" >
        <Switch>
            <Route path="/article" exact  component={ Artice } />
            <Route path="/article/:id" exact component={ ArticeContent } />
            <Route path="/about" component={ About } />
            <Route path="/labels" component={ Lables } />
            <Redirect exact path="/" to={{pathname: '/article'}} />
        </Switch>
    </div>
}

export default Content;
