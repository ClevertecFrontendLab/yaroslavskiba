import { Layout } from 'antd';
import { Content } from './content/content';
import { Header } from './header/header';
import './main-page.css';

export const MainPage: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content />
        </Layout>
    );
};
