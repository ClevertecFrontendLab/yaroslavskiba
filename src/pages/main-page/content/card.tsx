import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { cardInfoListType } from 'src/types';

const { Text, Link } = Typography;

const cardInfoList: cardInfoListType[] = [
    {
        text: 'Расписать тренировки',
        link: { linkText: 'Тренировки', icon: <HeartFilled /> },
    },
    {
        text: 'Назначить календарь',
        link: { linkText: 'Календарь', icon: <CalendarTwoTone /> },
    },
    {
        text: 'Заполнить профиль',
        link: { linkText: 'Профиль', icon: <IdcardOutlined /> },
    },
];

export const MainCard = () => {
    return (
        <div className='main-list'>
            {cardInfoList.map((card) => {
                return (
                    <div className='link-card'>
                        <Text className='link-card-title'>{card.text}</Text>
                        <Link href='#' className='link-card-link'>
                            <span>{card.link.icon}</span>
                            <span>{card.link.linkText}</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
