import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Error from './Error';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getItems } from '../redux/slices/ItemSlice';
import { List } from 'antd';
import Loading from './Loading';

export default function Main() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.data.items);
    const isError = useAppSelector((state) => state.data.error);
    const loading = useAppSelector((state) => state.data.loading);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    return (
        <>
            {loading && <Loading />}
            {isError && <Error />}
            {items.length > 0 && <List
                header={<div className='list__title'>Список услуг</div>}
                dataSource={items}
                renderItem={(item) => (
                    <Link to={`/${item.id}/details`} key={item.id}>
                        <li>{item.name}</li>
                    </Link>
                )}    
            />}
        </>
    );
}
