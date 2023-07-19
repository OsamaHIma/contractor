import { Button, Typography } from '@mui/material'
import React from 'react'

function Head() {
    return (
        <Typography variant='div' component='div' display="flex" justifyContent="space-between">
            <Typography className='textColor fw-bold' sx={{}}>
                Dashboard
            </Typography>

            <Typography variant='div' component="div" className='d-flex flex-wrap justify-content-end'>
                <Button
                    sx={{
                        background: "#7DB00E",
                        color: "white",
                        border: "1px solid #7DB00E",
                        padding: "7px 15px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        marginTop: "7px"
                    }}
                >View Insights
                </Button>
                <Button
                    sx={{
                        background: "transparent",
                        color: "#7DB00E",
                        border: "1px solid #7DB00E",
                        padding: "7px 15px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        marginTop: "7px",
                        "&:hover": {
                            color: "white",
                            borderColor: "white"
                        }
                    }}
                >More Acttion
                </Button>

            </Typography>

        </Typography>
    )
}

export default Head
