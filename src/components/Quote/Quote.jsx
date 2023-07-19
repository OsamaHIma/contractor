import React from 'react'
import useApp from '../../Hooks/useApp';
import { Typography } from '@mui/material';
import HeaderComp from '../ForAllComponents/Header';
import CenterQoute from './centerQoute/CenterQoute';
import TableQuote from './table/TableQoute';
import AddQoute from './addQoute/AddQoute';

function Quote() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{ p: 3 }}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterQoute />
            <TableQuote />
            <AddQoute />
        </Typography>
    )
}

export default Quote
