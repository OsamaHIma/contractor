import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import CreareJobIcon from "../../../../Icons/CreateJob.png"

function FirstRoute() {
    return (
        <Typography variant='div' component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "200px" }}>

            <Typography variant='div' component="div" className='mb-4 text-center' sx={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>
                Let’s create a job and start working
            </Typography>

            <Typography variant='div' component="div">
                <Link to="addJob">
                    <Button sx={{
                        background: "#7DB00E", color: "white", fontWeight: "bold", padding: "10px 19px", border: "1px solid #7DB00E", borderRadius: "3px", "&:hover": {
                            background: "tranparent"
                        }
                    }}>
                        <img src={CreareJobIcon} alt="" />
                    </Button>
                </Link >

            </Typography>

        </Typography>
    )
}

export default FirstRoute
