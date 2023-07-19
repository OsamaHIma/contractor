import { } from '@mui/material';
import React from 'react'

function ChartComponent({ val , bgColor}) {

    const dashArray = 20 * Math.PI * 2
    const dashOffset = dashArray - (dashArray * val)  / 100

    const size = 70

    return (
        

        <svg width="70" height="70">
            <circle cx={size / 2} cy={size / 2} strokeWidth="12px" r="20" style={{
                stroke: 'white',
                fill: "none"
            }}/>

            <circle cx={size / 2} cy={size / 2} strokeWidth="12px" r="20" style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
                stroke: bgColor,
                fill: "none",
                
            }}  transform={`rotate(-90 ${size / 2} ${size / 2})`}/>
        </svg>

    )
}

export default ChartComponent
