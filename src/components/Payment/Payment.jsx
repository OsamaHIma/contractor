import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import PaymentCenter from './center/PaymentCenter';
import TableComponent from './Table/Table';
import AddNewPayment from './AddNew/AddNewPayment';
import { Typography } from '@mui/material';

function Payment() {
    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <PaymentCenter/>
            <TableComponent />
            <AddNewPayment />


        </Typography>
    )
}

export default Payment
