import { configureStore } from "@reduxjs/toolkit";
import transaccionesReducer from '../Features/transaccionesSlice';

export const Store = configureStore({
    reducer: {
        transacciones: transaccionesReducer
    }
})