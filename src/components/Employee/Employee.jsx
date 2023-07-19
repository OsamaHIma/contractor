import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import CenterEmp from './CenterEmp';
import TableEmp from './TableEmp';
import AddNewEmp from './AddNewEmp/AddNewEmp';
import { Typography } from '@mui/material';

function Employee() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterEmp/>
            <TableEmp/>
            <AddNewEmp/>
        </Typography>
    )
}

export default Employee
