import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    monedas: []
}

export const monedasReducer = createSlice({
    name: 'monedas',
    initialState,
    reducers:{
        guardarMonedas: (state, action) => {
            state.monedas = action.payload;
        }
    }
});

export const {guardarMonedas} = monedasReducer.actions;
export default monedasReducer.reducer;