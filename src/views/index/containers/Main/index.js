import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'

import Header from '../Header'
import Content from '../Content'

class App extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                {/**加载器 */}
                {/* <Loader /> */}
                {/**左导航栏 */}
                {/* <LeftMenu /> */}
                {/**主体内容 */}
                <Content />
            </Fragment>
        )
    }
}

export default App