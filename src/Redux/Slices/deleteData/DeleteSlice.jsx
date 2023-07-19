import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseUrl from "../../../Api/BaseUrl";

export const DeleteAsync = createAsyncThunk('deleteItem', async (arg) => {

    const token = localStorage.getItem('token');

    const config = { headers: { 'Authorization': `Bearer ${token}` } };

    const response = await BaseUrl.delete(`/${arg[0]}/?id=${arg[1]}` , config)

    return response;

});



const initialState = {
    data: [],
    loading: false,
    error: ""
}

const DeleteSlice = createSlice({
    name: "deleteSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(DeleteAsync.pending, (state) => {
            state.loading = true
        })
        builder.addCase(DeleteAsync.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(DeleteAsync.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default DeleteSlice.reducer