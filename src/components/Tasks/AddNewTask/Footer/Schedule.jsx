import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import React from 'react'

function Schedule({ title,
    inputText,
    active,
    start_time,
    setStart_time,
    end_time,
    setEnd_time 
}) {
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
                    {title}

                </Typography>

            </Typography>

            <Typography variant='div' component="div">
                <Typography className='Text' variant='div' >
                    {inputText ? (
                        <Grid container variant='div' component="div" sx={{ display: "flex", marginTop: "20px" }}>
                            <Grid xl={4} xs={12} lg={5} item variant='div' component="div">
                                <label style={{ marginBottom: "10px" }} htmlFor="StartDate">Start date:</label>
                                <input value={start_time} onChange={(e) => setStart_time(e.target.value)} style={{ color: "white", background: "transparent", padding: "9px", border: "1px solid white", borderRadius: "5px" }} type='number' id='StartDate' />
                            </Grid>
                            <Grid className='mt-2 mt-lg-0  ms-xl-4 ms-0' item xl={4} lg={5} xs={12} variant='div' component="div">
                                <label style={{ marginBottom: "10px" }} htmlFor="EndDate">End date:</label>
                                <input value={end_time} onChange={(e) => setEnd_time(e.target.value)} style={{ color: "white", background: "transparent ", padding: "9px", border: "1px solid white", borderRadius: "5px" }} type='number' id='EndDate' />
                            </Grid>
                        </Grid>
                    ) : null}
                </Typography>

            </Typography>


            {active ? (
                <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                    <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} sx={{ color: "white" }} label={active} />
                </Typography>
            ) : null}


        </Typography>
    )
}


export default Schedule
