import {RouteObject, useRoutes} from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Layout from '@/layout';


/**
 * 公共路由
 */
export const  constantRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
];

// 创建一个可以被 React 应用程序使用的路由实例
const router = () => {
    const routes = useRoutes(constantRoutes);
    return routes;
};
export default router;