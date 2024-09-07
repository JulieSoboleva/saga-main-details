import { PayloadAction } from '@reduxjs/toolkit';

export interface Item {
    id: string,
    name: string,
}

export interface ItemDetails {
    id: string,
    name: string,
    content: string,
    price: string,
}

export interface InitialState {
    items: Item[],
    details: ItemDetails | null,
    errorFunc: PayloadAction<string> | null,
    error: string | null,
    loading: boolean,
}