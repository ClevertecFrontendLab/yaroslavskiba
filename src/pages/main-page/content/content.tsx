import { Button, Layout, Space, Typography } from 'antd';
import './content.css';
import { MainCard } from './card';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

const { Text, Link } = Typography;

export const Content = () => {
    return (
        <Layout className='content-container'>
            <div className='card-container'>
                <Text className='card-text blue-text'>
                    С CleverFit ты сможешь:
                    <br />— планировать свои тренировки на календаре, выбирая тип и уровень
                    нагрузки;
                    <br />— отслеживать свои достижения в разделе статистики, сравнивая свои
                    результаты с нормами и рекордами;
                    <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и
                    отзывы о тренировках;
                    <br />— выполнять расписанные тренировки для разных частей тела, следуя
                    подробным инструкциям и советам профессиональных тренеров.
                </Text>
            </div>

            <div className='card-container'>
                <Text className='card-text card-text-large'>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Text>
            </div>
            <MainCard />
            <div className='contact-info-container'>
                <div className='review-button'>
                    <Link href='#'>Смотреть Отзывы</Link>
                </div>
                <div className='link-card'>
                    <div className='link-card-title-container'>
                        <Link href='#'>Скачать на телефон</Link>
                        <Text type='secondary'>Доступно в PRO-тарифе</Text>
                    </div>

                    <div className='link-card-content'>
                        <Button type='text'>
                            <span>
                                <AndroidFilled />
                            </span>
                            <span>Android OS</span>
                        </Button>
                        <Button type='text'>
                            <span>
                                <AppleFilled />
                            </span>
                            <span>Apple iOS</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
