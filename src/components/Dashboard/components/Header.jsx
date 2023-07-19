import { useEffect, useState } from "react";
import useApp from "../../../Hooks/useApp";
import { useTheme } from "next-themes";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Interrogative from "../../../Icons/interrogative.png";
import { Search } from "@mui/icons-material";
import { Switch } from "@mui/material";

function Header() {
  const [checked, setChecked] = useState(false);
  const { setTheme } = useTheme();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked]);

  return (
    <>
      <div className="bg-slate-200 dark:bg-dark-slate flex justify-between items-center py-4 px-6 md:px-10">
        <h1 className="text-2xl font-bold">Company name</h1>
        <div className="flex items-center">
          <div className="relative mr-4 md:mr-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 " />
            </div>
            <input
              className="bg-gray-800 block w-full pl-10 pr-3 py-2 rounded-md leading-5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-300 sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center">
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span className="font-bold text-lg ml-2 md:ml-4">Dark Mode</span>
            <NotificationsNoneIcon
              sx={{ fontSize: "30px", color: "white", marginLeft: "20px" }}
            />
            <img src={Interrogative} className="ml-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
