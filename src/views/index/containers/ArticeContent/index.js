import React from 'react';
import ArticeContent from '@views/index/components/ArticleContent'
import LoadMask from '@views/index/components/LoadMask'
import Anchors from '@views/index/components/Anchors'

function ArticeContentWarp(){
    return <div className="article-content-warp" >
                <ArticeContent></ArticeContent>
                <Anchors></Anchors>
                <LoadMask></LoadMask>
           </div>
}

export default ArticeContentWarp;