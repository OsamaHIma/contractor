import { Typography } from '@mui/material'
import React from 'react'
import "./AddNewItems.css"
import HeaderAddNewItems from './HeaderAddNew/HeaderAddNewItems'
import ContentItems from '../Content/ContentItems'

function AddNewItems() {
    return (
        <Typography variant='div' component="div" className='ADD-Items' sx={{
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
            <HeaderAddNewItems/>
            <ContentItems />


        </Typography>
    )
}

export default AddNewItems
