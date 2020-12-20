import { Card } from 'antd';

const { Meta } = Card;

export function Portfolio (){
    return(
        <div className="portfolio">
            <a href="https://mayyyyyyyy.github.io/todo-list-Vue-vision-/">
                <Card
                    hoverable
                    style={{ width: 240,height:300}}
                    cover={<img alt="example" style={{ width: 240, height: 200}} src="https://images.unsplash.com/photo-1605777800582-3555d4e887f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVVJc25WdGpCMFl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60" />}
                >
                    <Meta title="Todo List in React" description="https://github.com/Mayyyyyyyy/todo-list-Vue-vision-" />
                </Card>
            </a>
            <a href="https://mayyyyyyyy.github.io/xidu-website-version2/">
                <Card
                    hoverable
                    style={{ width: 240, height: 300 }}
                    cover={<img alt="example" style={{ width: 240, height: 200 }} src="https://images.unsplash.com/photo-1461176081794-1d14e06aed41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60" />}
                >
                    <Meta title="xidu official website" description="https://github.com/Mayyyyyyyy/xidu-website-version2" />
                </Card>
            </a>
            <a href="https://mayyyyyyyy.github.io/NetEase-slide-show/">
                <Card
                    hoverable
                    style={{ width: 240, height: 300 }}
                    cover={<img alt="example" style={{ width: 240, height: 200 }} src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60" />}
                >
                    <Meta title="NetEase slide show" description="https://github.com/Mayyyyyyyy/NetEase-slide-show" />
                </Card>
            </a>
            <a href=" https://mayyyyyyyy.github.io/Carousel/">
                <Card
                    hoverable
                    style={{ width: 240, height: 300 }}
                    cover={<img alt="example" style={{ width: 240, height: 200 }} src="https://images.unsplash.com/photo-1530333821974-f9fcfd6718c8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGlVSXNuVnRqQjBZfHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60" />}
                >
                    <Meta title="Carousel" description="https://github.com/Mayyyyyyyy/Carousel" />
                </Card>
            </a>
            <a href="https://mayyyyyyyy.github.io/V-2020/">
                <Card
                    hoverable
                    style={{ width: 240, height: 300 }}
                    cover={<img alt="example" style={{ width: 240, height: 200 }} src="https://images.unsplash.com/photo-1605734790149-eb9d57dac134?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60" />}
                >
                    <Meta title="V-2020" description="https://github.com/Mayyyyyyyy/V-2020" />
                </Card>
            </a>
            <a href=" https://mayyyyyyyy.github.io/2020/">
                <Card
                    hoverable
                    style={{ width: 240, height: 300 }}
                    cover={<img alt="example" style={{ width: 240, height: 200 }} src="https://images.unsplash.com/photo-1605543854175-2952397714b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGlVSXNuVnRqQjBZfHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60" />}
                >
                    <Meta title="2020" description="https://github.com/Mayyyyyyyy/2020" />
                </Card>
            </a>

        </div>
    )
}