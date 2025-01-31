import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import ItemSlice from '../slices/ItemSlice';
import { sagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: { data: ItemSlice },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
