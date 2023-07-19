import React from 'react'
import { Button, Typography } from '@mui/material'

function Trial() {
    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <Typography variant='div' component="div" className='textColor'
                sx={{
                    background: "#012939",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: '15px 20px',
                    flexWrap: "wrap"
                }}
            >
                <Typography>
                    You have 14 days left in trial
                </Typography>
                <Typography>
                    <Button
                        sx={{
                            background: '#7DB00E',
                            color: "white",
                            border: "1px solid #7DB00E",
                            padding: "5px 12px",
                            fontWeight: 'bold'
                        }}
                    >Choose Plan</Button>
                </Typography>
            
            </Typography>
        </Typography>
    )
}

export default Trial
