import React,{ Component } from 'react'
import ReactDom  from 'react-dom'
import { Route } from 'react-router-dom'

import Modal from '@components/Moadl'
import PublishArticles from '../PublishArticles'
import DraftManage     from '../DraftManage'
import PublishManage   from '../PublishManage'
import LabelManage     from '../LabelManage'

class ManageContent extends Component{

    render(){
		return (
            <div className="m-content">
                <Modal></Modal>
                <Route path="/edit" component={ PublishArticles } />
                <Route path="/draft" component={ DraftManage } />
                <Route path="/publish" component={ PublishManage } />
                <Route path="/labels" component={ LabelManage  } />
            </div>
         )
    }
}

export default ManageContent;