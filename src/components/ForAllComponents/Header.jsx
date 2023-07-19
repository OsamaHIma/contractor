/* eslint-disable jsx-a11y/alt-text */
import { Switch, Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Interrogative from "../../../src/Icons/interrogative.png"
import React from 'react'

function HeaderComp({ checked, setChecked , noCheack}) {


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
                color: checked? "rgba(243, 243, 243, 0.7)" : "black",
                fontSize: "24px",
                fontFamily: ""

            }}>
                Company Name
            </Typography>

            <Typography className='me-5 me-md-0 me-xl-2 HeaderRight' variant='div' sx={{ display: "flex", alignItems: "center" }}>
                
                {noCheack ? null : (
                <>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    
                    <Typography className='d-none d-md-block' variant='div' sx={{ color: checked?  "white" : "black", fontWeight: "bold", fontSize: "22px", fontFamily: "" }}>
                        Dark Mode
                    </Typography>
                </>
                )}

                <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "20px", cursor: "pointer" }}>
                    <NotificationsNoneIcon sx={{ fontSize: "30px" ,  color: checked? "white" : "black" }} />
                </Typography>

                <Typography variant='div' sx={{ color: checked? "white" : "black", fontWeight: "bold", marginLeft: "10px", cursor: "pointer" }}>
                    <img src={Interrogative} />
                </Typography>
            </Typography>

        </Typography>
    )
}

export default HeaderComp
