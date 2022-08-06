import { configureStore } from "@reduxjs/toolkit";
import transaccionesReducer from '../Features/transaccionesSlice';
import monedasReducer from "../Features/monedasReducer";
import apiKeyReducer from '../Features/apiKeyReducer'

export const Store = configureStore({
    reducer: {
        transacciones: transaccionesReducer,
        monedas: monedasReducer,
        apiKey: apiKeyReducer
    }
})