import { configureStore } from "@reduxjs/toolkit";
import transaccionesReducer from '../Features/transaccionesSlice';
import monedasReducer from "../Features/monedasReducer";
import apiKeyReducer from '../Features/apiKeyReducer'
import InvertidoReducer from "../Features/InvertidoReducer";

export const Store = configureStore({
    reducer: {
        transacciones: transaccionesReducer,
        monedas: monedasReducer,
        invertido: InvertidoReducer,
        apiKey: apiKeyReducer
    }
})