import React from 'react';

import { Anchor } from 'antd';
const { Link } = Anchor;

import './style.scss';

function Anchors(props){
    const { anchors } = props;
    return <div className="anchors-box" >
                <Anchor 
                    getContainer={() => document.querySelector('.article-content-warp') }  >
                    {  anchors && anchors.map(anchor=><Link href={`#${anchor}`} title={anchor} ></Link>) }
                </Anchor>
            </div>
}

export default Anchors;
