import React from 'react'
import useApp from '../../Hooks/useApp';
import HeaderComp from '../ForAllComponents/Header';
import CenterExpense from './Center/CenterExpense';
import TableExpense from "./Table/TableExpense"
import AddExpense from './AddExpense/AddExpense';
import { Typography } from '@mui/material';

function Expense() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterExpense />
            <TableExpense />
            <AddExpense />
        </Typography>
    )
}

export default Expense
