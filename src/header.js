import React from 'react';
import { Button } from 'antd';

export function Intro(){
    return(
        <div>
            <div className="nav">
              <Button type="text" >关于</Button>
              <Button type="text" >简历</Button>
              <Button type="text" >作品</Button>
              <Button type="text" >联系</Button>
            </div>
            <div className="intro">
              <p className="name">我是唐雪梅</p>
              <p>在gap期间自学前端。目前致力于前端工程师的工作和学习</p>
            </div>
        </div>
    )
}