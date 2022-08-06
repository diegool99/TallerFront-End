import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiKey: "73b9ad352b23a7f4b4b3de4572477b35"
}

export const apiKeyReducer = createSlice({
    name: 'apiKey',
    initialState,
    reducers:{
        token: (state) => {
            state.apiKey = "73b9ad352b23a7f4b4b3de4572477b35";
        }
    }
});

export const{token} = apiKeyReducer.actions;
export default apiKeyReducer.reducer;