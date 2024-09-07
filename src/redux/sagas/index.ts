import { put, call, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
    GET_ITEMS,
    GET_ITEM_DETAILS,
    getItemDetailsSuccess,
    getItemsFailed,
    getItemsLoading,
    getItemsSuccess
} from '../slices/ItemSlice';
import { Item, ItemDetails } from '../../models';
import { getServicesApi, getItemDetailsApi } from '../../api';

export function* getItemsSaga() {
    try {
        yield put(getItemsLoading());
        const payload: Item[] = yield call(getServicesApi);

        yield put(getItemsSuccess(payload));
    } catch (error) {
        yield put(
            getItemsFailed({
                error: (error as Error).message,
                errFunc: { type: GET_ITEMS, payload: '' },
            })
        );
    }
}

export function* getItemDetailsSaga(action: PayloadAction<string>) {
    try {
        yield put(getItemsLoading());
        const id: string = action.payload;
        const payload: ItemDetails = yield call(getItemDetailsApi, id);

        yield put(getItemDetailsSuccess(payload));
    } catch (error) {
        yield put(
            getItemsFailed({ error: (error as Error).message, errFunc: action })
        );
    }
}

export function* sagas() {
    yield takeLatest(GET_ITEMS, getItemsSaga);
    yield takeLatest(GET_ITEM_DETAILS, getItemDetailsSaga);
}
