import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { Route } from 'react-router-dom'
import About from '../About'
import Artice from '../Article'
import Label from '../Label'


class Content extends Component{

    render(){

        return (
            <section className="m-content">
                <Route path="/article" component={ Artice } />
                <Route path="/about" component={ About } />
                <Route path="/label" component={ Label } /> 
            </section>
         )
    }
}

export default Content;