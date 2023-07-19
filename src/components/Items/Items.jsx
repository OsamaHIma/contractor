import React from 'react'
import CenterItems from './Center/CenterItems'
import TableItems from './Table/TableItems'
import HeaderComp from "../ForAllComponents/Header"
import AddNewItems from './AddNewItems/AddNewItems'
import useApp from '../../Hooks/useApp'
import { Typography } from '@mui/material'

function Items() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterItems />
            <TableItems />
            <AddNewItems />
        </Typography>
    )
}

export default Items
