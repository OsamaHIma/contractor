import React, { useEffect } from 'react'
import CenterClients from './MainClient/CenterClients'
import TableClient from './MainClient/TableClient'
import AddNewClient from './AddNewClient/AddNewClient'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp'
import { Typography } from '@mui/material'

function Clients() {

    const {checked, setChecked} = useApp();


    useEffect(() => {
        if (checked) {
            document.querySelector(".BigMain").setAttribute("dark", 'true')
        } else {
            document.querySelector(".BigMain").setAttribute("dark", 'false')
        }
    }, [checked])

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked}/>
            <CenterClients />
            <TableClient />
            <AddNewClient />
        </Typography>
    )
}

export default Clients
