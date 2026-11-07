import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice.ts";

export const store = configureStore({
    reducer: {
        products: productSlice
    },
})