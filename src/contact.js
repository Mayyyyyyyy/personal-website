import { PhoneOutlined, WechatOutlined, MailOutlined, GithubOutlined} from '@ant-design/icons';


export function Contact (){
    return(
        <div className="contact">
            <div className="container">
                <div>
                    <PhoneOutlined />
                    <p>+86 15196778838</p>
                </div>
                <div>
                    <WechatOutlined />
                    <p>15196778838</p>
                </div>
                <div>
                    <MailOutlined />
                    <p>workingmailofmay@163.com</p>
                </div>
                <div>
                    <GithubOutlined />
                    <p>https://github.com/Mayyyyyyyy</p>
                </div>
            </div>
        </div>
    )
}