import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        total: 11,
        items: [
            {
                key: 1,
                name: "Food",
                quantity: 4
            },
            {
                key: 2,
                name: "Cold Drink",
                quantity: 2
            },
            {
                key: 3,
                name: "Maggi",
                quantity: 5
            }
        ]
    },
    reducers: {
        increment: (state, action) => {
            state.items[action.payload.key - 1].quantity += 1;
            state.total += 1;
        },
        decrement: (state, action) => {
            if (action.payload.quantity) {
                state.items[action.payload.key - 1].quantity -= 1;
            }
            state.total -= 1;
        },
        addItem: (state, action) => {
            if (state.items.some(item => item.name.toLocaleLowerCase() === action.payload.toLocaleLowerCase())) {
                const index = state.items.findIndex(item => item.name.toLocaleLowerCase() === action.payload.toLocaleLowerCase());
                state.items[index].quantity += 1;
            } else {
                state.items.push({
                    key: state.items.length + 1,
                    name: action.payload,
                    quantity: 1
                })
            }
            state.total += 1;
        },
        clearCart: state => {
            state.items.length = 0;
            state.total = 0;
        }
    }
})

export const { increment, decrement, addItem, clearCart } = counterSlice.actions;
export default counterSlice.reducer;
