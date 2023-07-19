import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import JobCenter from './center/JobCenter';
import { Outlet } from 'react-router-dom';
import AddNewJob from './AddNewJob/AddNewJob';
import { Typography } from '@mui/material';

function Job() {
    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <JobCenter />
            <Outlet />
            <AddNewJob />


        </Typography>
    )
}

export default Job
