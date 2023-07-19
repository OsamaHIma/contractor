import React from 'react'
import useApp from '../../Hooks/useApp';
import { Typography } from '@mui/material';
import HeaderComp from '../ForAllComponents/Header';
import CenterCompany from './center/CenterCompany';
import TableCompany from './Table/TableCompany';
import AddNewCompany from './AddNew/AddNewCompany';

function Company() {

    const {checked, setChecked} = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked}/>
            <CenterCompany/>
            <TableCompany/>
            <AddNewCompany/>
            
        </Typography>
    )
}

export default Company
