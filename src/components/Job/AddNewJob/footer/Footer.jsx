import { Grid, Typography } from '@mui/material'
import React from 'react'
import FooterBtns from './FooterBtns'
import Salender from './Salender'
import TeamComponent from '../../../Projects/AddNewProjectComponents/Footer/team/TeamComponent'
import Schedule from './Schedule'
import Invoice from './Invoice'

function Footer({setDate, start_day, setStart_day, end_day, setEnd_day, HandleClick, setSubtotal, subtotal, }) {

    return (
        <Typography variant='div' component="div" sx={{ marginTop: "25px" }}>
            <Grid container spacing={{ md: 4 }}>
                <Grid item md={5} xs={12}>
                    <Schedule
                        title={'Schedule:'}
                        inputText={true}
                        active={"Schedule later"}
                        start_day={start_day}
                        setStart_day={setStart_day}
                        end_day={end_day}
                        setEnd_day={setEnd_day}
                    />
                    <Invoice />
                    <TeamComponent subtotal={subtotal} setSubtotal={setSubtotal} />
                </Grid>
                <Grid item md={7} xs={12}>
                    <Salender
                        setDate={setDate}
                    />
                </Grid>
            </Grid>
            <FooterBtns HandleClick={HandleClick} />
        </Typography>
    )
}

export default Footer
