import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseUrl from "../../../Api/BaseUrl";

export const asyncDataWithImg = createAsyncThunk("dataWithImg/send", async (arg) => {

    const token = localStorage.getItem("token")
    const config = {
        Accept: "application/json", headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    }

    const response = await BaseUrl.post(`api/v1/${arg[0]}`, arg[1], config);

    return response;

})

const initialState = {
    loading: false,
    data: [],
    error: "",
    status: "",
}

const dataWithImgSlice = createSlice({
    name: "dataWithImg",
    initialState,
    extraReducers: builder => {
        builder.addCase(asyncDataWithImg.pending, (state) => {
            state.loading = true
        })

        builder.addCase(asyncDataWithImg.fulfilled, (state, action) => {

            state.loading = false
            state.data = action.payload.data
            state.status = action.payload.status
            state.error = ""
        })

        builder.addCase(asyncDataWithImg.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = 400
            state.data = []

        });

    }

})

export default dataWithImgSlice.reducer