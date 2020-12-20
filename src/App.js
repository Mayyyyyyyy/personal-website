import { Layout } from 'antd';
import {Intro} from './header';
import {About} from './about';
import {Resume} from './resume';
import {Portfolio} from './portfolio';
import {Contact} from './contact';
import { BackTop } from 'antd';



const { Header, Footer, Content } = Layout;
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#817DBA',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Intro/>
        </Header>
        <Content className="content">
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
        </Content>
        <Footer className="footer">copyright@may 2020</Footer>
      </Layout>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
}

export default App;
