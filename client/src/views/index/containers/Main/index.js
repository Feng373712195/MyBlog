import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

class App extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        )
    }
}

export default App