import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    compras: 0,
    ventas: 0,
    total: 0
}

export const InvertidoReducer = createSlice({
    name: 'invertido',
    initialState,
    reducers:{
        guardarCompras: (state,action) =>{
            state.compras = action.payload;
        },
        guardarVentas: (state,action) =>{
            state.ventas = action.payload;
        },
        guardarTotal: (state,action) =>{
            state.total = action.payload;
        }
    }
});

export const{guardarCompras, guardarVentas, guardarTotal} = InvertidoReducer.actions;
export default InvertidoReducer.reducer;