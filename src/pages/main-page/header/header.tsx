import { Button, Space, Typography } from 'antd';
import './header.css';
import { SettingOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

export const Header = () => {
    return (
        <>
            <header className='header'>
                <Space direction='vertical'>
                    <Text>Главная</Text>
                    <Space align='start' size={'large'}>
                        <Title level={1} className='title'>
                            Приветствуем тебя в CleverFit — приложении, <br />
                            которое поможет тебе добиться своей мечты!
                        </Title>
                        <Button className='icon-button' type='text'>
                            <SettingOutlined />
                            <span>Настройки</span>
                        </Button>
                    </Space>
                </Space>
            </header>
        </>
    );
};
