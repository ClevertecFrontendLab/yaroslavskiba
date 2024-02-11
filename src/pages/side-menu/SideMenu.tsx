import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import './side.menu.css';
import { ButtonStatePropsWithSvg } from 'src/types';

const { Sider } = Layout;

const navItems = [
    {
        key: '1',
        icon: <CalendarTwoTone />,
        label: 'Календарь',
    },
    {
        key: '2',
        icon: <HeartFilled />,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyFilled />,
        label: 'Достижения',
    },
    {
        key: '4',
        icon: <IdcardOutlined />,
        label: 'Профиль',
    },
];

const CollapseButton = ({ func, icon, svg, mobile }: ButtonStatePropsWithSvg) => {
    return (
        <button
            onClick={func}
            className='collapse-button'
            data-test-id={mobile ? 'sider-switch-mobile' : 'sider-switch'}
        >
            <span className='collapse-icon'>{icon}</span>
            {svg &&
                (mobile ? (
                    <svg
                        width='32'
                        height='48'
                        viewBox='0 0 32 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M0 0L32 5.81818V42.1818L0 48V0Z' fill='white' />
                    </svg>
                ) : (
                    <svg
                        width='20'
                        height='66'
                        viewBox='0 0 20 66'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M0 -1.52588e-05L20 7.99998V58L0 66V-1.52588e-05Z' fill='white' />
                    </svg>
                ))}
        </button>
    );
};

export const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    return (
        <>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme='light'
                className='side-menu'
                width={isMobile ? 106 : 204}
                collapsedWidth={isMobile ? 0 : 64}
            >
                <div
                    className='logo'
                    style={
                        collapsed
                            ? {
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  padding: '18px',
                              }
                            : isMobile
                            ? { padding: '16px 17px' }
                            : { padding: '14px 46px 16px 29px' }
                    }
                >
                    {isMobile ? (
                        <img src='/images/mobileCleverFit.svg' alt='Мобильный логотип' />
                    ) : collapsed ? (
                        <img src='/images/collapseCleverFit.svg' alt='Закрытый логотип' />
                    ) : (
                        <img src='/images/fullscreenCleverFit.svg' alt='Открытый логотип' />
                    )}
                </div>
                <Menu theme='light' mode='inline' items={navItems} />
                <CollapseButton
                    func={() => setCollapsed(!collapsed)}
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    svg={true}
                    mobile={isMobile}
                />
                <div
                    className='exit'
                    style={isMobile ? (collapsed ? { display: 'none' } : { display: 'block' }) : {}}
                >
                    <Button type='text' className='exit-button'>
                        {collapsed ? (
                            <img
                                src='/svg/exit.svg'
                                alt='Иконка выхода'
                                style={isMobile ? { width: 0 } : { width: '100%' }}
                            />
                        ) : isMobile ? (
                            <span>Выход</span>
                        ) : (
                            <>
                                <img src='/svg/exit.svg' alt='Иконка выхода' />
                                <span>Выход</span>
                            </>
                        )}
                    </Button>
                </div>
            </Sider>
        </>
    );
};
