import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuthenticated: false,
    sessionId: '',
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.sessionId = localStorage.getItem('session_id');
        },
        setSessionId: (state, action) => {
            state.sessionId = action.payload;
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { setUser, setSessionId, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;