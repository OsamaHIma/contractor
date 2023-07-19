import { FormControl, Grid, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

function TaskSettings() {
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
                    Tax settings:
                </Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{ width: '100%' }}>
                            <OutlinedInput sx={{
                                border: "1px solid #ffffff8c",
                                height: "45px",
                                borderRadius: "7px !important"
                            }} placeholder="Tax ID Name (ex: GST)" />
                        </FormControl>

                        <Typography sx={{ margin: "15px 0" }}>
                            *No Tax rate have been created yet.

                        </Typography>



                    </Grid>
                    <Grid item xs={12} md={6}>

                        <FormControl sx={{ width: '100%' }}>
                            <OutlinedInput sx={{
                                border: "1px solid #ffffff8c",
                                height: "45px",
                                borderRadius: "7px !important"
                            }} placeholder="Tax ID Number" />
                        </FormControl>

                    </Grid>
                </Grid>

                <Typography variant='div' component="div" sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                    <button style={{
                        background: "#878787",
                        color: "white",
                        padding: "7px",
                        borderRadius: "8px",
                        border: "1px solid white",
                        marginRight: "10px",
                        fontWeight: "bold"
                    }}>+ Create Tax Group
                    </button>

                    <button style={{
                        background: "#7DB00E",
                        color: "white",
                        padding: "7px",
                        borderRadius: "8px",
                        border: "1px solid white",
                        marginLeft: "10px",
                        fontWeight: "bold"

                    }}>+ Create Tax Rate
                    </button>

                </Typography>

            </Typography>
        </Typography>
    )
}

export default TaskSettings
