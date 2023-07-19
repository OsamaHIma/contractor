import { Grid, Typography } from '@mui/material'
import React from 'react'
import Salender from '../../../Job/AddNewJob/footer/Salender'
import Schedule from './Schedule'
import TeamComponent from './TeamComponent'
import FooterBtns from './FooterBtns'

function Footer({
    HandleClick,
    date,
    setDate,
    start_time,
    setStart_time,
    end_time,
    setEnd_time,
    status,
    setStatus
}) {
    return (
        <Typography variant='div' component="div" sx={{ marginTop: "25px" }}>
            <Grid container spacing={{ md: 4 }}>
                <Grid item md={5} xs={12}>
                    <Schedule
                        title={'Schedule:'}
                        inputText={true}
                        active={"Schedule later"}
                        start_time={start_time}
                        setStart_time={setStart_time}
                        end_time={end_time}
                        setEnd_time={setEnd_time}
                    />
                    <TeamComponent
                        status={status}
                        setStatus={setStatus}
                    />
                </Grid>
                <Grid item md={7} xs={12}>
                    <Salender date={date} setDate={setDate} />
                </Grid>
            </Grid>
            <FooterBtns HandleClick={HandleClick} />
        </Typography>
    )
}

export default Footer
