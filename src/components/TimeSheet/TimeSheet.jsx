import { Avatar, Typography } from '@mui/material';
import React from 'react'
import SearchComponent from './SearchComponent';
import CalendarComponent from '../Projects/AddNewProjectComponents/Footer/calendar/calendar';
import Footer from './Footer';

function TimeSheet() {

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <Typography className='textColor' variant='div' component="div">
                <Typography className='fw-bold mt-2 mb-5' variant='div' component="div">
                    Connect & grow plan feature
                </Typography>

                <Typography className='fw-bold' variant='h4'>
                    Timesheets
                </Typography>

                <SearchComponent />

                <Typography variant='div' component="div" sx={{
                    background: "#012939",
                    padding: "15px 25px",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ffffff70",
                    borderRadius: "7px"
                }}>
                    <Typography variant='div' component="div" className='me-3'>
                        <Avatar sx={{background: "#7DB00E"}} alt="Oudai Zedan" src="/static/images/avatar/1.jpg" />
                    </Typography>
                    <Typography variant='div' component="div">

                        <Typography variant='div' component="div" className='fw-bold'>
                            Oudai Zedan
                        </Typography>

                        <Typography variant='div' component="div">
                            ecoin@etrevago.com
                        </Typography>


                    </Typography>

                </Typography>

                <CalendarComponent />

                <Footer />
            </Typography>
        </Typography>
    )


}

export default TimeSheet
