import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: true }

const DarkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        ToDarkMode: (state) => {
            state.mode = false
        },
        ToLightMode: (state) => {
            state.mode = true
        }
    }
})

export default DarkModeSlice.reducer

export const {ToDarkMode , ToLightMode} = DarkModeSlice.actions