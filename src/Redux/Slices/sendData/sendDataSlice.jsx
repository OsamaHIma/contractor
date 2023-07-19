import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseUrl from "../../../Api/BaseUrl";

export const sendDataAsync = createAsyncThunk("sendData/send", async (arg) => {

    const token = localStorage.getItem("token")



    const config = {
        Accept: "application/json", headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    console.log(arg);

    const res = await BaseUrl.post(`api/v1/${arg[0]}` ,arg[1] , config)

    return res

})

const initialState = {
    loading: false,
    data: [],
    error: "",
    status: ""
}

const sendDataSlice = createSlice({
    name: "sendData",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(sendDataAsync.pending, (state) => {
            state.loading = true
        })
        builder.addCase(sendDataAsync.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.status = action.payload.status
            state.error = ""

        })
        builder.addCase(sendDataAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = 400
            state.data = []
        })
    }
})


export default sendDataSlice.reducer