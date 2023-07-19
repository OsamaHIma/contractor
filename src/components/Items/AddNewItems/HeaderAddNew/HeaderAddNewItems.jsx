/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material'
import React from 'react'
import useItems from '../../../../Hooks/useItems'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Interrogative from "../../../../Icons/interrogative.png"

import BackToItems from "../../../../Icons/BackToItems.png"

function HeaderAddNewItems() {

    const { HandleAddCloseItems } = useItems()

    return (
        <Typography variant='div' component="div" >
            <Typography variant='div' component="div" style={{
                display: "flex" ,
                 justifyContent: "space-between",
                 alignItems: "center"
                 }}>
                <Typography variant='span' component="span" onClick={HandleAddCloseItems} sx={{ cursor: "pointer" }} >
                    <img src={BackToItems} alt="" />
                </Typography>

                <Typography variant='div' component="div">
                    <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "20px", cursor: "pointer" }}>
                        <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
                    </Typography>

                    <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "10px", cursor: "pointer" }}>
                        <img src={Interrogative} />
                    </Typography>

                </Typography>
            </Typography>

            <Typography variant='h4' component="div" sx={{ marginTop: "30px", color: "white" }}>
                New Items
            </Typography>

        </Typography>
    )
}

export default HeaderAddNewItems
