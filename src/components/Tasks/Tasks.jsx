import React from "react";
import HeaderComp from "../ForAllComponents/Header";
import useApp from "../../Hooks/useApp";
import TaskCenter from "./TaskCenter";
import TableTask from "./TableTask";
import AddNewTask from "./AddNewTask/AddNewTask";
import {  Typography } from '@mui/material';
const Tasks = () => {
  const { checked, setChecked } = useApp();

  return (
    <Typography variant='div' component="div" sx={{p:3}}>
      <HeaderComp setChecked={setChecked} checked={checked} />
      <TaskCenter />
      <TableTask />
      <AddNewTask />


    </Typography>
  );
};

export default Tasks;
