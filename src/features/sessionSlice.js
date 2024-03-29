import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    username: null
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers : {
        // le 'state' sera les infos. du user au moment du l'authentitfication

        // action est un 'action' redux. Les actions sont du type objet{type=..., payload=username}
        loginSuccess: (state, action) => {
            state.username = action.payload;
            state.isAuthenticated = true;
        },
        logoutSuccess: (state) => {
            state.username = null
            state.isAuthenticated = false;
        }
    }
})