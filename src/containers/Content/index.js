import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Route,Redirect } from 'react-router-dom'
import About from '../About'
import Artice from '../Article'
import Label from '../Label'


class Content extends Component{

    render(){

        return (
            <section className="m-content">
                <Route path="/article" component={ Artice } />
                <Route path="/label" component={ Label } /> 
                <Route path="/about" component={ About } />
                <Redirect path="/" to={{pathname: '/article'}} />
            </section>
         )
    }
}

export default Content;