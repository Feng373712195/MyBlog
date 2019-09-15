import React from 'react';
import './style.scss';

function About(){
    return <div className="aboutme-warp" >
        <div className="aboutme" >
            <div className="photo" >
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568544264834&di=62fddaedcf554bd17fced19b6ff85817&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F45%2F34%2F01300001024098148066342526056_s.jpg" />
            </div>
            <div className="introduce" >
                <p className="name" >Wu ZeFeng</p>
                <p>这个博客属于一位很无聊的的前端程序员</p>
                <div className="links" >
                    <a>Github</a>
                    <a>掘金</a>
                    <a>思否</a>
                </div>
            </div>
        </div>
    </div>
} 

export default About;