import Box from "@mui/material/Box";
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="flex text-slate-900 dark:text-slate-100 bg-slate-300 dark:bg-[#10394A]">
      <SideBar />
      <Box
        className="BigMain"
        component="main"
        sx={{ flexGrow: 1, position: "relative" }}
      >
        <MainComponent />
      </Box>
    </div>
  );
}

export default App;
