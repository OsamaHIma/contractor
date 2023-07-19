import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseUrl from "../../Api/BaseUrl";


export const SignInAsync = createAsyncThunk("signIn/sign", async (arg) => {

    const data = await BaseUrl.post("api/v1/register", arg, {
        headers: {
            Accept: "application/json",
            
        }
    })

    return data.data
})

const initialState = {
    loading: false,
    signIn: false,
    token: "",
    data: null,
    error: ""
}

const signInslice = createSlice({
    name: "signIn",
    initialState,
    extraReducers: {
        [SignInAsync.pending]: (state) => {
            state.loading = true
        },
        [SignInAsync.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.token = action.payload.token
        },
        [SignInAsync.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
    }

})

export default signInslice.reducer


