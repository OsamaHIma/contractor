import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "next-themes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
