import {Layout} from "antd";
import Ahead from "@/layout/header/index.tsx";
import Aside from "@/layout/sider/index.tsx";
import {Outlet} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const LayOut = () => {
    return (
        <>
            <Layout style={{height: '100vh'}} >
                <Sider>
                    <Aside/>
                </Sider>
                <Layout>
                    <Header>
                        <Ahead />
                    </Header>
                    <Content>
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default LayOut;
