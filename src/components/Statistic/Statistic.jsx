import React from "react";
import HeaderComp from "../ForAllComponents/Header";
import useApp from "../../Hooks/useApp";
import FootAnalysis from "../Dashboard/components/Charts/FootAnalysis";
import { Typography } from "@mui/material";
import Analysis from "../Dashboard/components/Charts/Analysis";

function Statistic() {
  const { checked, setChecked } = useApp();

  return (
    <Typography variant="div" component="div" sx={{ p: 3 }}>
      <HeaderComp setChecked={setChecked} checked={checked} />

      <Typography
        variant="div"
        component="div"
        className="textColor"
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "25px",
        }}
      >
        Statistic
      </Typography>

      <Analysis />

      <FootAnalysis />
    </Typography>
  );
}

export default Statistic;
