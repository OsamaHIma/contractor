import React from 'react'
import HeaderAddNew from '../../Request/AddNew/HeaderAddNew'
import { Typography } from '@mui/material'
import "./AddNewPayment.css"
import Content from './contant/Content'
import FooterAddNew from './FooterAddNew'

function AddNewPayment() {
  return (
    <Typography variant='div' component="div" className='ADD-Payment' sx={{
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
        <HeaderAddNew name="New Payment"/>
        <Content />
        <FooterAddNew/>
        


    </Typography>
  )
}

export default AddNewPayment
