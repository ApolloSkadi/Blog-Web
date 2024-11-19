import { createRoot } from 'react-dom/client'
import './index.css'
import {ConfigProvider} from "antd";
import {RouterProvider} from "react-router-dom";
import routers from "@/routers/index";

const rootElement = document.getElementById('root');
// 检查 rootElement 是否为 null
if (!rootElement) {
    throw new Error("Root element not found. Make sure there is a <div id='root'></div> in your index.html.");
}

const router = (
    <ConfigProvider>
        <RouterProvider router={routers} />
    </ConfigProvider>
)
createRoot(rootElement).render(router)