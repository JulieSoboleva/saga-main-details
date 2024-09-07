import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getItemDetails } from '../redux/slices/ItemSlice';
import Loading from './Loading';
import { Card, Descriptions, DescriptionsProps } from 'antd';

export default function ItemDetails() {
    const dispatch = useAppDispatch();
    const details = useAppSelector((state) => state.data.details);
    const isError = useAppSelector((state) => state.data.error);
    const loading = useAppSelector((state) => state.data.loading);
    const { id } = useParams();

    useEffect(() => {
        id && dispatch(getItemDetails(id));
    }, [id, dispatch]);

    if (loading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }
    
    if (details) {
        const info: DescriptionsProps['items'] = [
            {
                key: '1',
                label: 'Описание',
                children: details.content,
            },
            {
                key: '2',
                label: 'Цена',
                children: details.price,
            },
        ];
        return (
            <Card title={details.name} bordered={false} className='details__card'>
                <div className='details'>
                    <Descriptions 
                        className='details__info'
                        bordered
                        column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
                        items={info}
                    />
                </div>
            </Card>
        );
    }
}
