import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiKey: '',
    id: '',
}

export const apiKeyReducer = createSlice({
    name: 'apiKey',
    initialState,
    reducers:{
        guardarApiKey: (state,action) => {
            state.apiKey = action.payload;;
        },
        guardarId: (state,action) => {
            state.id = action.payload;;
        }
    }
});

export const{guardarApiKey, guardarId} = apiKeyReducer.actions;
export default apiKeyReducer.reducer;