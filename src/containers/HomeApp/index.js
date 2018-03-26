import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'

import LeftMenu from '../LeftMenu'
import Content from '../Content'
import Loader from '../../components/Loader'

class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    {/**加载器 */}
                    <Loader />
                    {/**左导航栏 */}
                    <LeftMenu />
                    {/**主体内容 */}
                    <Content />
                </div>
            </Router>
        )
    }
}

export default App