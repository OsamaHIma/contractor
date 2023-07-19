import { Button, Typography } from '@mui/material'
import React from 'react'
import useTask from '../../useTask'

function FooterBtns({HandleClick}) {

    const {HandleAddCloseTask} = useTask()
    
    return (
        <Typography variant='div' component="div" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
        }}>
            <Typography variant='div' component="div">
                <Button onClick={HandleAddCloseTask} sx={{
                    border: "1px solid #FFFFFF",
                    background: "transparent",
                    padding: "7px 22px",
                    borderRadius: "7px",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                        opacity: 0.7
                    }
                }}>
                    Cancel
                </Button>

            </Typography>
            <Typography onClick={HandleClick} variant='div' component="div">
                <Button sx={{
                    background: "transparent",
                    padding: "7px 15px",
                    color: '#7DB00E',
                    border: "2px solid #7DB00E",
                    borderRadius: "7px",
                    fontWeight: "bold",
                    marginRight: "30px",
                    "&:hover": {
                        opacity: 0.7
                    }
                }}>
                    Save And Create Another
                </Button>

                <Button onClick={HandleClick} sx={{
                    background: "#7DB00E",
                    padding: "7px 20px",
                    color: 'white',
                    border: "2px solid white",
                    borderRadius: "7px",
                    fontWeight: "600"
                }}>
                    Save Task
                </Button>

            </Typography>


        </Typography>
    )
}

export default FooterBtns
