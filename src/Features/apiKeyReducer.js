import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    apiKey: "1a9d49ee815c464cb176578494b5583a"
}

export const apiKeyReducer = createSlice({
    name: 'apiKey',
    initialState,
    reducers:{
        token: (state) => {
            state.apiKey = "1a9d49ee815c464cb176578494b5583a";
        }
    }
});

export const{token} = apiKeyReducer.actions;
export default apiKeyReducer.reducer;