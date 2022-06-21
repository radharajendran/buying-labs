import { Form, Input, Button, Layout, Row, Col, message, Space } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const HomePage = () => {

    return (
        <div>
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Space direction="vertical" size="middle" style={{minHeight: 450, display: 'flex' }}>
                        Content
                    </Space>
                </Content>
                <Footer style={{textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );

}

export default HomePage;