import {Menu} from "antd";
import {useState} from "react";
import {PieChartOutlined} from '@ant-design/icons';

const Sider = () => {
    const [items] = useState([
        {
            key:1,
            icon: <PieChartOutlined />,
            label: '个人中心'
        },
        {
            key:2,
            icon: <PieChartOutlined />,
            label: '博客广场'
        },
        {
            key:3,
            icon: <PieChartOutlined />,
            label: '消息中心'
        }
    ])
    return (
        <div>
            <div>

            </div>
            <Menu
                mode="inline"
                theme="dark"
                items={items}/>
        </div>
    )
}
export default Sider;