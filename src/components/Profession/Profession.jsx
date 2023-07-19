import { Typography } from '@mui/material'
import React from 'react'
import useApp from '../../Hooks/useApp';
import HeaderComp from '../ForAllComponents/Header';
import CenterProfession from './center/CenterProfession';
import TableProfession from './table/TableProfession';
import AddNewProfession from './AddNewProfession/AddNewProfession';

function Profession() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{ p: 3 }}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterProfession/>
            <TableProfession/>
            <AddNewProfession/>

        </Typography>
    )
}

export default Profession
