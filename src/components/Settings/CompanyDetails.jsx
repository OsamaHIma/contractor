import { Grid, Typography } from '@mui/material'
import React from 'react'

function CompanyDetails() {
    return (
        <Typography variant='div' component="div"
            sx={{
                background: "#012939",
                borderTop: "3px solid #7DB00E",
                margin: "30px 0"

            }}
        >
            <Typography className='textColor' variant='div' component="div" sx={{ padding: "40px" }}>
                <Typography variant='h6' className='fw-bold mb-2'>
                    Company Details:
                </Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>

                        <Typography variant='div' component="div" sx={{
                            borderRadius: "15px",
                            border: "1px solid white",
                            display: "flex",
                            overflow: "hidden",
                            margin: "25px 0"
                        }}>
                            <span style={{
                                background: "#7DB00E",
                                padding: "8px",
                                borderRadius: "15px 0 0 15px",
                                fontWeight: "bold",
                                color: "black",
                                flex: "1",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center",
                                
                            }}>
                                Name
                            </span>

                            <input type="text" placeholder='Etrevago' style={{
                                flex: "4",
                                background: "transparent",
                                padding: "8px 8px 8px 25px",
                                borderRadius: "0 15px 15px 0",
                                border: "0",
                                outline: "0",
                                color: "white"

                            }} />

                        </Typography>
                        <Typography variant='div' component="div" sx={{
                            borderRadius: "15px",
                            border: "1px solid white",
                            display: "flex",
                            overflow: "hidden",
                            margin: "25px 0"
                        }}>
                            <span style={{
                                background: "#7DB00E",
                                padding: "8px",
                                borderRadius: "15px 0 0 15px",
                                fontWeight: "bold",
                                color: "black",
                                flex: "1",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                Phone
                            </span>

                            <input type="number" placeholder='Phone number' style={{
                                flex: "4",
                                background: "transparent",
                                padding: "8px 8px 8px 25px",
                                borderRadius: "0 15px 15px 0",
                                border: "0",
                                outline: "0",
                                color: "white"

                            }} />

                        </Typography>
                        <Typography variant='div' component="div" sx={{
                            borderRadius: "15px",
                            border: "1px solid white",
                            display: "flex",
                            overflow: "hidden",
                            margin: "15px 0"
                        }}>
                            <span style={{
                                background: "#7DB00E",
                                padding: "8px",
                                borderRadius: "15px 0 0 15px",
                                fontWeight: "bold",
                                color: "black",
                                flex: "1",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                URL
                            </span>

                            <input type="text" placeholder='Website URL' style={{
                                flex: "4",
                                background: "transparent",
                                padding: "8px 8px 8px 25px",
                                borderRadius: "0 15px 15px 0",
                                border: "0",
                                outline: "0",
                                color: "white"

                            }} />

                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Typography variant='div' component="div" sx={{
                            borderRadius: "15px",
                            border: "1px solid white",
                            display: "flex",
                            overflow: "hidden",
                            margin: "25px 0"
                        }}>
                            <span style={{
                                background: "#7DB00E",
                                padding: "8px",
                                borderRadius: "15px 0 0 15px",
                                fontWeight: "bold",
                                color: "black",
                                flex: "1",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                Email
                            </span>

                            <input type="email" placeholder='Email address' style={{
                                flex: "4",
                                background: "transparent",
                                padding: "8px 8px 8px 25px",
                                borderRadius: "0 15px 15px 0",
                                border: "0",
                                outline: "0",
                                color: "white"

                            }} />

                        </Typography>
                        <Typography variant='div' component="div" sx={{
                            borderRadius: "15px",
                            border: "1px solid white",
                            display: "flex",
                            overflow: "hidden",
                            margin: "25px 0"
                        }}>
                            <span style={{
                                background: "#7DB00E",
                                padding: "8px",
                                borderRadius: "15px 0 0 15px",
                                fontWeight: "bold",
                                color: "black",
                                flex: "1",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                Code
                            </span>

                            <input type="number" placeholder='Code' style={{
                                flex: "4",
                                background: "transparent",
                                padding: "8px 8px 8px 25px",
                                borderRadius: "0 15px 15px 0",
                                border: "0",
                                outline: "0",
                                color: "white"

                            }} />

                        </Typography>
                        <Typography variant='div' component="div" sx={{
                            borderRadius: "15px",
                            border: "1px solid white",
                            display: "flex",
                            overflow: "hidden",
                            margin: "15px 0"
                        }}>
                            <span style={{
                                background: "#7DB00E",
                                padding: "8px",
                                borderRadius: "15px 0 0 15px",
                                fontWeight: "bold",
                                color: "black",
                                flex: "1",
                                fontSize: "15px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                Location
                            </span>

                            <input type="text" placeholder='Location address' style={{
                                flex: "4",
                                background: "transparent",
                                padding: "8px 8px 8px 25px",
                                borderRadius: "0 15px 15px 0",
                                border: "0",
                                outline: "0",
                                color: "white"

                            }} />

                        </Typography>

                    </Grid>

                </Grid>

            </Typography>
        </Typography>
    )
}

export default CompanyDetails
