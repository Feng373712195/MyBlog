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
                    <a href="https://github.com/Feng373712195" target="href" >Github</a>
                    <a href="https://juejin.im/user/58e3586e61ff4b00617a22fa" target="href" >掘金</a>
                    <a href="http://wuzefeng.cb" target="href" >博客</a>
                </div>
            </div>
        </div>
    </div>
} 

export default About;