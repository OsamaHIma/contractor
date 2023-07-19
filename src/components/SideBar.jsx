/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DashIcon from "../Icons/Group 1000003330.png";
import Vector from "../Icons/Group.png";
import PayIcon from "../Icons/Group3.png";
import MessIcon from "../Icons/Group4.png";
import itemsIcon from "../Icons/Group5.png";
import clintIcon from "../Icons/Group6.png";
import expenIcon from "../Icons/Group7.png";
import invoiceIcon from "../Icons/Group8.png";
import jobicon from "../Icons/Group9.png";
import reqIcon from "../Icons/Group10.png";
import taskIcon from "../Icons/Group11.png";
import projectIcon from "../Icons/Group12.png";
import emplIcon from "../Icons/Group13.png";
import schIcon from "../Icons/Group14.png";
import reporIcon from "../Icons/Group15.png";
import timeIcon from "../Icons/Group16.png";
import Gear from "../Icons/Gear.png";
import SignOut from "../Icons/SignOut.png";
import Logo from "../Icons/Logo.png";
import Logo2 from "../Icons/Logo2.png";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";
import useApp from "../Hooks/useApp";
import { Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  const Lists = [
    {
      name: "Dashboard",
      img: DashIcon,
      path: "/",
    },
    {
      name: "Statistic",
      img: Vector,
      path: "statistic",
    },
    {
      name: "Payment",
      img: PayIcon,
      path: "payment",
    },
    {
      name: "Messages",
      img: MessIcon,
      path: "messages",
    },
    {
      name: "Items",
      img: itemsIcon,
      path: "items",
    },
    {
      name: "Clients",
      img: clintIcon,
      path: "clients",
    },
    {
      name: "Expense",
      img: expenIcon,
      path: "expense",
    },
    {
      name: "invoice",
      img: invoiceIcon,
      path: "invoice",
    },
    {
      name: "Job",
      img: jobicon,
      path: "job",
    },
    {
      name: "Request",
      img: reqIcon,
      path: "request",
    },
    {
      name: "Task",
      img: taskIcon,
      path: "task",
    },
    {
      name: "Project",
      img: projectIcon,
      path: "project",
    },
    {
      name: "Employee",
      img: emplIcon,
      path: "employee",
    },
    {
      name: "Schedule",
      img: schIcon,
      path: "schedule",
    },
    {
      name: "Reports",
      img: reporIcon,
      path: "reports",
    },
    {
      name: "Timesheet",
      img: timeIcon,
      path: "timesheet",
    },
    {
      name: "Quote",
      img: reqIcon,
      path: "quote",
    },
    {
      name: "Profession",
      img: reporIcon,
      path: "profession",
    },
    {
      name: "Company",
      img: jobicon,
      path: "company",
    },
  ];

  const { open, handleDrawerOpenAndClose, Drawer, DrawerHeader } = useApp();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton
          sx={{
            width: "100%",
            marginTop: "15px",
            "&:hover": {
              background: "#55555554",
              borderRadius: "0",
            },
          }}
          onClick={handleDrawerOpenAndClose}
        >
          <Typography
            className="logo1"
            sx={{
              display: "none",
              padding: "5px 0",
              marginTop: "10px",
              margin: "auto",
            }}
          >
            <img src={Logo} alt="" />
          </Typography>
          <Typography className="logo2" sx={{ display: "block" }}>
            <img src={Logo2} alt="" />
          </Typography>
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List
        sx={{
          height: "800px",
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "gray",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "darkgray",
          },
        }}
      >
        {Lists.map((item, index) => {
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              key={index}
              to={item.path}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.img} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
      <Divider />
      <List>
        {[
          {
            name: "Settings",
            img: Gear,
            path: "settings",
          },
          {
            name: "LogOut",
            img: SignOut,
            path: "login",
          },
        ].map((item, index) => (
          <Link to={item.path} key={index}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={item.img} alt="" />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
