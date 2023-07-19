
import { Typography } from '@mui/material'
import React from 'react'
import HeaderAddNewInvoice from './HeaderAddNewInvoice/HeaderAddNewInvoice'
import ContentInvoice from './ContentInvoice/ContentInvoice'
import "./AddNewInvoice.css"

function AddNewInvoice() {
    return (
        <Typography variant='div' component="div" className='ADD-Invoice' sx={{
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
            <HeaderAddNewInvoice />
            <ContentInvoice />


        </Typography>
    )
}

export default AddNewInvoice
