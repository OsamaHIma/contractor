import React, { useState } from 'react'
import { Typography } from '@mui/material'

import Calendar from "react-calendar";
import "./calender.css"
import "react-calendar/dist/Calendar.css";



function CalendarComponent() {


    const [value, onChange] = useState(new Date());

    return (
        <Typography className='timeSheet col-12 col-md-6 col-lg-4 col-xl-3 my-3' variant='div' component="div" sx={{
            background: "#012939",
            marginBottom: "20px",
            borderRadius: "5px 0 0 0",
            
        }}>

            <div style={{height: "100%"}}>
                <Calendar  onChange={onChange} value={value} />
            </div>

        </Typography>
    )
}

export default CalendarComponent 
