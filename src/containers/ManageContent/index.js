import React,{ Component } from 'react'
import ReactDom  from 'react-dom'
import { Route } from 'react-router-dom'

import PublishArticles from '../PublishArticles'
import DraftManage     from '../DraftManage'
import PublishManage   from '../PublishManage'
import LabelManage     from '../LabelManage'

class ManageContent extends Component{

    render(){
		return (
            <div className="m-content">
                <Route path="/admin/manage/publish/edit" component={ PublishArticles } />
                <Route path="/admin/manage/draft/manage" component={ DraftManage } />
                <Route path="/admin/manage/publish/manage" component={ PublishManage } />
                <Route path="/admin/manage/label/manage" component={ LabelManage  } />
            </div>
         )
    }
}

export default ManageContent;