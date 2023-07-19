import { Typography } from '@mui/material'
import React from 'react'
import backIcon from "../../../../Icons/BackClientIcon.png"
import useClient from '../../../../Hooks/useClient'


function HeaderAddNewClient() {

    const { HandleAddCloseClient } = useClient()
    


    return (
        <Typography variant='div' component="div" >
            <Typography variant='div' component="div">
                <Typography variant='span' component="span" onClick={HandleAddCloseClient} sx={{ cursor: "pointer" }} >
                    <img src={backIcon} alt="" />
                </Typography>
            </Typography>

            <Typography variant='div' component="div" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h4' component="div" sx={{ margin: "30px 0", color: "white", fontWeight: "bold" }}>

                    New Client
                </Typography>

            </Typography>

        </Typography>
    )
}

export default HeaderAddNewClient
