import { Typography } from '@mui/material'
import React from 'react'

import "./AddNewClient.css"
import HeaderAddNewClient from './component/HeaderAddNew'
import CenterAddClient from './component/CenterAddClient'

function AddNewClient() {
    return (
        <Typography variant='div' component="div" className='ADD-Client' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            height: "100%"
        }}>
            <HeaderAddNewClient />
            <CenterAddClient />


        </Typography>
    )
}

export default AddNewClient
