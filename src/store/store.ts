import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice.ts";
import orderSlice from "./slice/OrderSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        orders: orderSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;