import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        count2: 10
    },
    reducers: {
        increment: state => {
            state.count = state.count + 1
        },
        decrement: state => {
            state.count = state.count < 1 ? 0 : state.count - 1
        }
    }
})

console.log("slice", counterSlice);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;