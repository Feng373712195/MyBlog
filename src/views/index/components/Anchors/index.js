import React from 'react';

import { Anchor } from 'antd';
const { Link } = Anchor;

import './style.scss';

function Anchors(props){
    const { anchors } = props;
    return <div className="anchors-box" >
                 <div className="lable" >目录</div>
                <Anchor 
                    showInkInFixe={true}
                    getContainer={() => document.querySelector('.article-content-warp') }  >
                    {  anchors && anchors.map(anchor=><Link key={`#${anchor}`} href={`#${anchor}`} title={anchor} ></Link>) }
                </Anchor>
            </div>
}

export default Anchors;
