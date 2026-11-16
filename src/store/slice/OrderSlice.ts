import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Order from "../../type/Order";
import type { OrderState } from "../../type/Order";

const initialState: OrderState = {
    orders: []
};

const orderSlice = createSlice({
    initialState,
    name: "ListOrder",

    reducers: {
        loadOrders: (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
        }
    }
});

export const {
    loadOrders
} = orderSlice.actions;

export default orderSlice.reducer;