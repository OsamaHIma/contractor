import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

function Invoice() {
  return (
    <Typography variant='div' component="div" sx={{
        background: "#012939",
        minHeight: "150px",
        width: "100%",
        marginBottom: "20px",
        borderTop: "10px solid #5c8308",
        borderRadius: "5px 0 0 0",
        padding: "20px"
    }}>
        <Typography variant='div' component="div">
            <Typography className='Text' variant='h5'>
                Invoice

            </Typography>

        </Typography>

        
            <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} sx={{ color: "white" }} label="Remind me to invoicing when I close the job"  />
            </Typography>
        


    </Typography>
  )
}

export default Invoice
