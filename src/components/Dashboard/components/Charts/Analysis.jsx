import React from 'react'
import ChartComponent from './ChartComponent'
import { Grid, Typography } from '@mui/material'

function Analysis() {
  return (
    <div className='mt-4'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography className='textColor' variant='div' component="div" sx={{
                                background: "#012939",
                                borderRadius: "5px",
                                padding: "15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Typography variant='div' component="div">
                                    <Typography className='mt-1' sx={{fontSize: "14px"}}>Todays Sales</Typography>
                                    <Typography className='mt-2' sx={{fontSize: "24px" , fontWeight: "bold"}}>$20.4K</Typography>
                                    <Typography className='my-2' sx={{fontSize: "14px"}}>We have sold 123 items </Typography>
                                </Typography>
                    
                                <Typography variant='div' component="div">
                                    <ChartComponent val={75} bgColor="#475BE8" />
                                </Typography>
                    
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography className='textColor' variant='div' component="div" sx={{
                                background: "#012939",
                                borderRadius: "5px",
                                padding: "15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Typography variant='div' component="div">
                                    <Typography className='mt-1' sx={{fontSize: "14px"}}> Todays Revenue</Typography>
                                    <Typography className='mt-2' sx={{fontSize: "24px" , fontWeight: "bold"}}>$8.2K</Typography>
                                    <Typography className='my-2' sx={{fontSize: "14px"}}>Availabale to payout</Typography>
                                </Typography>
                    
                                <Typography variant='div' component="div">
                                    <ChartComponent val={75} bgColor="#4CE13F" />
                                </Typography>
                    
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Typography className='textColor' variant='div' component="div" sx={{
                                background: "#012939",
                                borderRadius: "5px",
                                padding: "15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Typography variant='div' component="div">
                                    <Typography className='mt-1' sx={{fontSize: "14px"}}>In Escrow</Typography>
                                    <Typography className='mt-2' sx={{fontSize: "24px" , fontWeight: "bold"}}>$18.2K</Typography>
                                    <Typography className='my-2' sx={{fontSize: "14px"}}>Availabale to payout</Typography>
                                </Typography>
                                <Typography variant='div' component="div">
                                    <ChartComponent val={60} bgColor="#F29A2E" />
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
  )
}

export default Analysis
