import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import useApp from '../../Hooks/useApp'
import { Link, NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import Logo from "../../Icons/Logo.png"
import Logo2 from "../../Icons/Logo2.png"

function SideBar({handleClickOpen}) {
    const { open, handleDrawerOpenAndClose, Drawer, DrawerHeader } = useApp()


    return (

        <Drawer variant="permanent" open={open}>

            <DrawerHeader>
                <IconButton sx={{
                    width: "100%", marginTop: "15px", "&:hover": {
                        background: "#55555554",
                        borderRadius: "0"
                    }
                }} onClick={handleDrawerOpenAndClose}>
                    <Typography className='logo1' sx={{ display: "none", padding: "5px 0", marginTop: "10px", margin: "auto" }}>
                        <img src={Logo} alt="" />
                    </Typography>
                    <Typography className='logo2' sx={{ display: "block" }}>
                        <img src={Logo2} alt="" />
                    </Typography>
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <NavLink to="">
                    <ListItem disablePadding sx={{
                        display: 'block',
                        background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)"
                    }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

            </List>

            <Divider />

            <div style={{
                display: open ? 'flex' : "none",
                flexDirection: "column",
                justifyContent: "center",
                padding: "25px",

            }}>
                <div style={{ fontWeight: "bold" }}>BUSINESS MANAGEMENT</div>

                <div
                    style={{
                        fontWeight: "bold",
                        color: "#DDFF0D",
                        marginTop: "30px",
                    }}>Company Settings
                </div>
                <div style={{ fontWeight: "600" }}>
                    <div>Branding</div>
                    <div>Products & Services</div>
                    <div>Custom Fields </div>
                    <div>Expense Tracking</div>
                </div>
                <div style={{ margin: "35px 0" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "15px" }}>TEAM ORGANIZATION</div>
                    <div style={{ fontWeight: "600" }}>
                        <div>TEAM ORGANIZATION</div>
                        <div>Work Settings </div>
                        <div>Schedule</div>
                        <div>Route Optimization</div>
                        <div>Job Forms</div>
                    </div>
                </div>


                <div style={{ marginTop: "15px" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "15px" }}>CLIENT COMMUNICATION</div>
                    <div style={{ fontWeight: "600" }}>
                        <div>Client Hub</div>
                        <div>Emails</div>
                        <div>Schedule</div>
                        <div>Requests</div>
                    </div>
                </div>
                <div style={{ marginTop: "40px" }}>
                    <div style={{ fontWeight: "bold", marginBottom: "15px" }}>CONNECTED APPS</div>
                    <div style={{ fontWeight: "600" }}>
                        <div>Payment Integrations</div>
                    </div>
                </div>

            </div>

            <Divider />
            <List>

                <Link >
                    <ListItem onClick={handleClickOpen} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                            
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="logOut" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
        </Drawer>
    )
}

export default SideBar
