import React from 'react';

import { Anchor } from 'antd';
const { Link } = Anchor;

import './style.scss';

const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
};

function Anchors(props){
    const { anchors } = props;
    return <div className={ `anchors-box ${anchors ? '':'hide' }` } >
                 <div className="lable" >目录</div>
                <Anchor 
                    onClick={handleClick}
                    offsetTop={ 80 }>
                    {  anchors && anchors.map(anchor=><Link key={`#${anchor}`} href={`#${anchor}`} title={anchor} ></Link>) }
                </Anchor>
            </div>
}

export default Anchors;
