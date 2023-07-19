import { Typography } from '@mui/material';
import React, { useState } from 'react'
import Calendar from 'react-calendar';

function Salender({height , mt}) {
    const [value, onChange] = useState(new Date());

    return (
        <Typography variant='div' component="div" sx={{
            background: "#012939",
            width: "100%",
            marginBottom: "20px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            height: height ? height : "600px",
            marginTop: mt
            
        }}>

            <div style={{height: "100%"}}>
                <Calendar  onChange={onChange} value={value} />
            </div>

        </Typography>
    )
}

export default Salender
