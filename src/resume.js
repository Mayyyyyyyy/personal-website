import { Progress} from 'antd';

export function Resume(){
    return(
        <div className="resume">
            <div className="education">
                <h1>教育经历</h1>
                <div>
                    <h2>西华师范大学</h2>
                    <p>新闻学·2015-2019</p>
                    <ul>学习内容：
                        <br/>
                        <li style={{listStyle:'none'}}>理论：新闻学原理、传播学、媒介经营与管理……</li>
                        <li style={{ listStyle: 'none' }}>实践：摄影摄像、PS、AE等</li>
                    </ul>
                </div>
            </div>
           <div className="experience">
               <h1>Gap一年</h1>
               <div>
                   <h2>瑞典</h2>
                   <p>自学前端·2019-2020</p>
               </div>
           </div>
           <div className="skills">
               <h1>技能</h1>
               <div>
                   <div>
                    <span>HTML\CSS\JS</span>
                    <br/>
                        <Progress
                            strokeColor={{
                                '0%': '#817DBA',
                                '100%': '#FFB6DA',
                            }}
                            percent={90}
                            size="small"
                            style={{width:40+'%'}}
                        />
                    </div>
                    <div>
                        <span>React\Vue\JQuery\Bootstrap</span>
                        <br/>
                        <Progress
                            strokeColor={{
                                '0%': '#817DBA',
                                '100%': '#FFB6DA',
                            }}
                            percent={70}
                            size="small"
                            style={{ width: 40 + '%' }}
                        />
                    </div>
                    <div>
                        <span>Sass\Typescript\Node.js</span>
                        <br/>
                        <Progress
                            strokeColor={{
                                '0%': '#817DBA',
                                '100%': '#FFB6DA',
                            }}
                            percent={40}
                            size="small"
                            style={{ width: 40 + '%' }}
                        />
                    </div>
               </div>
           </div>
        </div>
    )
}