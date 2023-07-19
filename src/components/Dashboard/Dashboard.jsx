import React from 'react'
import Trial from './components/Trial'
import Header from './components/Header'
import { Typography } from '@mui/material'
import Head from './components/Head'
import Analysis from './components/Charts/Analysis'
import Center from './components/Charts/Center'
import FootAnalysis from './components/Charts/FootAnalysis'


function Dashboard() {
   

    return (
        <>
            <Trial />

            <Header />

            <Typography variant='div' component="div" sx={{ p: 3 }}>
                <Head />
                <Analysis/>
                <Center/>
                <FootAnalysis/>
                

            </Typography>

        </>
    )
}

export default Dashboard
