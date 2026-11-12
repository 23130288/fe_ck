import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    initialState: [],
    name: 'ListProduct',
    reducers: {
        load: (_state: any, action: any) => {
            return action.payload;
        }
    }
})
export const {load} = productSlice.actions;
export default productSlice.reducer;