import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, Item, ItemDetails } from '../../models';

const initialState: InitialState = {
    items: [],
    details: null,
    errorFunc: null,
    error: '',
    loading: false,
};

const ItemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        getItemsSuccess(state, action: PayloadAction<Item[]>) {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
            state.errorFunc = null;
        },
        getItemsFailed(
            state,
            action: PayloadAction<{
                error: string;
                errFunc: PayloadAction<string>;
            }>) {
            state.loading = false;
            state.error = action.payload.error;
            state.errorFunc = action.payload.errFunc;
            state.items = [];
        },
        getItemsLoading(state) {
            state.loading = true;
            state.error = null;
            state.errorFunc = null;
            state.items = [];
            state.details = null;
        },

        getItemDetailsSuccess(state, action: PayloadAction<ItemDetails>) {
            state.loading = false;
            state.error = null;
            state.details = action.payload;
        },
    },
});

export const GET_ITEMS = "items/getItems";
export const getItems = createAction(GET_ITEMS);

export const GET_ITEM_DETAILS = "items/getItemDetails";
export const getItemDetails = createAction<string>(GET_ITEM_DETAILS);

export const {
    getItemsSuccess,
    getItemsFailed,
    getItemsLoading,
    getItemDetailsSuccess,
} = ItemSlice.actions;

export default ItemSlice.reducer;
