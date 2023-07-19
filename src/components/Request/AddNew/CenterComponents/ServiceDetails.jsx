import { Typography } from '@mui/material'
import React from 'react'

function ServiceDetails({instruction , setInstruction}) {
    return (
        <Typography variant='div' component="div" sx={{
            background: "#012939",
            borderTop: "2px solid #7DB00E",
            color: "white",
            padding: "30px",
            marginBottom: "30px"
        }}>
            <Typography variant='div' component="div"
                sx={{ fontSize: "30px", fontWeight: "600" }}
            >
                Service details:
            </Typography>

            <Typography variant='span' component="div"
                sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    margin: "15px 0 10px 10px",
                    color: "#ffffff80"
                }}
            >
                Please provide as much information as you can
            </Typography>

            <Typography variant='div' component="div"
                sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    margin: "15px 0 10px 10px",
                    color: "#ffffff80",
                    width: "100%"
                }}
            >
                <textarea
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                
                style={{
                    width: "100%",
                    maxHeight: "100px",
                    minHeight: "100px",
                    background: "transparent",
                    color: "white",
                    padding: "10px"
                }} name="" id="" ></textarea>
            </Typography>


        </Typography>
    )
}

export default ServiceDetails
