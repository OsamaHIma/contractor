import { Typography } from '@mui/material'
import React from 'react'
import "./AddNewCompany.css"
import HeaderAddNew from './components/HeaderAddNew'
import CenterAddNew from './components/CenterAddNew'

function AddNewCompany() {
  return (
    <Typography variant='div' component="div" className='ADD-Company' sx={{
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
       <HeaderAddNew/>
       <CenterAddNew/>


    </Typography>
  )
}

export default AddNewCompany
