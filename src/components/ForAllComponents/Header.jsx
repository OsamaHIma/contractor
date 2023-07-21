/* eslint-disable jsx-a11y/alt-text */
import { Switch } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Interrogative from "../../../src/Icons/interrogative.png";
import React from "react";

function HeaderComp({ checked, setChecked, noCheack }) {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        Company Name
      </div>
      <div>
        {!noCheack && (
          <div className="flex items-center">
            <Switch checked={checked} onChange={handleChange} />

            <div
              className={
                "text-lg font-bold ml-2 " +
                (checked ? " text-white" : "text-gray-800 dark:text-white")
              }
            >
              Dark Mode
            </div>
          </div>
        )}

        <div className="flex items-center">
          <NotificationsNoneIcon
            className={
              "w-8 h-8 mr-2 " + (checked ? "text-white" : "text-gray-800")
            }
          />

          <img src={Interrogative} className="h-8 w-8 mr-2" />
        </div>
      </div>
    </div>
  );
}

export default HeaderComp;
