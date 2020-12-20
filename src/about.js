import { Avatar, Divider, Row, Col } from 'antd';


export function About (){
    return(   
        <div className="about">
            <Row>
                <Col span={6}>
                    <Avatar size={200} src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHB1cnBsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                </Col>
                <Col span={18}>
                    <div>
                        <Divider orientation="left" style={{ fontSize: 40 }}>关于</Divider>
                        <p>在本科学习期间，选修了MySQL和Python。经过这两门课，初步管中窥豹，了解一点计算机知识。<br /><br />毕业后，在Gap的一年时间，通过油管、各种库官网以及B站等，学习了HTML\CSS\JS\React\Vue\JQuery\SASS\Typescript\Node.js等。在初步学会HTML、CSS后，开始做一些简单的网页。在学习JS后，开始做一些互动效果。在学习了React和Vue这两个强大的库后，开始将网页分解成组块进行开发和管理。<br /><br />目前最完善的项目是为西渡国际青年旅舍做的官网。西渡官网以信息展示为主，辅以一些交互。在做这个项目时，翻阅了很多网站以及网站模板，了解了网站的结构及布局。随后意识到在JS方面的不足，于是找了很多JS小项目做。小项目一个个做下来后，理解了JS的原理，也了解了一些很少用到的JS知识。紧接着做了一些React和Vue的小项目。特别是React，其衍生的生态圈特别强大，开发也由此变得简单起来了。<br /><br />未来N年，打算做前端工程师。目前，由于商业项目经验不足，特此寻找前端实习。</p>
                    </div>
                </Col>
            </Row>   
       </div>
    )
}