import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "./Slices/DarkModeSlice";
import LoginSlice from "./Slices/LoginSlice";
import getDataSlice from "./Slices/getData/getDataSlice";
import SignInSlice from "./Slices/SignInSlice";
import dataWithImgSlice from "./Slices/sendData/dataWithImgSlice";
import sendDataSlice from "./Slices/sendData/sendDataSlice";
import DeleteSlice from "./Slices/deleteData/DeleteSlice";

const store = configureStore({
    reducer: {
        DarkMode: DarkModeSlice,
        Login: LoginSlice,
        getDataSlice: getDataSlice,
        SignIng: SignInSlice,
        dataWithImg: dataWithImgSlice,
        sendData: sendDataSlice,
        DeleteData: DeleteSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store