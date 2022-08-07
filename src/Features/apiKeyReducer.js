import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiKey: "331aabd19922933bbf6441f5f0d8f64e"
}

export const apiKeyReducer = createSlice({
    name: 'apiKey',
    initialState,
    reducers:{
        token: (state) => {
            state.apiKey = "331aabd19922933bbf6441f5f0d8f64e";
        }
    }
});

export const{token} = apiKeyReducer.actions;
export default apiKeyReducer.reducer;