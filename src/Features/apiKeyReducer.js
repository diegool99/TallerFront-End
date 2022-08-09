import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    user: "",
    apiKey: ""
}

export const apiKeyReducer = createSlice({
    name: 'apiKey',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.apiKey = action.payload;
        },
        setIdUser: (state, action) => {
            state.id = action.payload;
        },
        setUserName: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setToken, setIdUser, setUserName } = apiKeyReducer.actions;
export default apiKeyReducer.reducer;