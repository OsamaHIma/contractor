import { Typography } from '@mui/material'
import React from 'react'

function Top({title, instruction, setTitle, setInstruction}) {
    return (
        <Typography variant='div' component="div" >
            <Typography className='Text' sx={{ fontSize: "28px", fontWeight: "500" }}>
                Job details:
            </Typography>
            <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='inp' placeholder='Title' type="text" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }} />
            </Typography>
            <Typography variant='div' component="div" sx={{ margin: "23px 0" }}>
                <input
                    onChange={(e) => setInstruction(e.target.value)}
                    value={instruction}
                    className='inp'
                    placeholder='instruction' type="text"
                    style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }} />
            </Typography>
        </Typography>
    )
}

export default Top
