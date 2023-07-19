import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseUrl from "../../../Api/BaseUrl";


export const getDataAsync = createAsyncThunk("getData/Data", async (arg) => {

    const token = localStorage.getItem("token")

    const config = { headers: { "Authorization": `Bearer ${token}` } }

    try {
        const GetData = await BaseUrl.get(arg, config)
        const finalData = await GetData.data

        return finalData

    } catch (error) {        
        return error.message
    }

})

const initialState = {
    loading: false,
    data: []
}

const getDataSlice = createSlice({
    name: "getData",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDataAsync.pending , (state) => {
            state.loading = true
        })
        builder.addCase(getDataAsync.fulfilled , (state , action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getDataAsync.rejected , (state , action) => {
            state.loading = false

        })
    }
})

export default getDataSlice.reducer