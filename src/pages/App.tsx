import { Outlet } from 'react-router-dom';
import { SideMenu } from './side-menu';
import { Layout } from 'antd';
import './app.css';

export const App = () => {
    return (
        <Layout className='app-container'>
            <SideMenu />
            <Outlet />
        </Layout>
    );
};
