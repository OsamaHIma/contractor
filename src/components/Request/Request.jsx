import { Typography } from '@mui/material'
import React from 'react'
import CenterRequset from './componentsRequests/CenterRequset'
import AddNewRequest from './AddNew/AddNewRequest'
import { Outlet } from 'react-router-dom'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp'


function Request() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterRequset />
            <Outlet />
            <AddNewRequest />
        </Typography>
    )
}

export default Request
