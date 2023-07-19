import { Grid, Typography } from '@mui/material'
import React from 'react'

function Content() {
    return (
        <Typography className='textColor' variant='div' component="div" sx={{
            width: "100%",
            background: "#012939",
            marginTop: "25px",
            borderTop: "5px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 20px"
        }}>

            <Typography variant='div' component="div"
                sx={{
                    fontSize: "25px"
                }}>
                Project details
            </Typography>

            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='Id' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="text" />
                    </Typography>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='Phone Number' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="number" />
                    </Typography>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='invoice id' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="text" />
                    </Typography>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='payment amount' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="number" />
                    </Typography>


                </Grid>

                <Grid item xs={12} md={6}>

                <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='E-Mail' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="email" />
                    </Typography>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='Phone Number' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="number" />
                    </Typography>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='data created' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="text" />
                    </Typography>
                    <Typography  sx={{ margin: "20px 0" }} variant='div' component="div">
                        <input placeholder='Total Value' className='textColor' style={{
                            background: "transparent",
                            padding: "7px 5px 7px 10px",
                            border: "1px solid rgb(240 240 240 / 63%)",
                            borderRadius: "5px",
                        }} type="number" />
                    </Typography>



                </Grid>

            </Grid>

        </Typography>
    )
}

export default Content
