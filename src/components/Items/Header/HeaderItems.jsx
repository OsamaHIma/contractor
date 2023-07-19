/* eslint-disable jsx-a11y/alt-text */
import { Switch, Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Interrogative from "../../../Icons/interrogative.png"
import React, { useState } from 'react'

function HeaderItems() {

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Typography variant='div' sx={
            {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
        }>
            <Typography variant='div' sx={{
                color: "rgba(243, 243, 243, 0.7)",
                fontSize: "24px",
                fontFamily: ""

            }}>
                Company Name
            </Typography>

            <Typography className='me-5 me-md-0 me-xl-2 HeaderRight' variant='div' sx={{ display: "flex", alignItems: "center" }}>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

                <Typography className='d-none d-md-block' variant='div' sx={{ color: "white", fontWeight: "bold", fontSize: "22px", fontFamily: "" }}>
                    Dark Mode
                </Typography>

                <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "20px", cursor: "pointer" }}>
                    <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
                </Typography>

                <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "10px", cursor: "pointer" }}>
                    <img src={Interrogative} />
                </Typography>
            </Typography>

        </Typography>
    )
}

export default HeaderItems
