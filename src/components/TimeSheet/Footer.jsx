import { Button, FormControl, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

function Footer() {

    const [title, setTitle] = useState("")

    const [start, setStart] = useState("")

    const [end, setEnd] = useState("")

    const [duration, setDuration] = useState()

    return (
        <Typography variant='div' component="div"
            sx={{
                background: "#012939",
                borderTop: "4px solid  #7DB00E",
                padding: "15px"
            }}
        >
            <Typography variant='div' component="div" className='d-flex justify-content-between align-items-center'>

                <Typography variant='div' component="div" className='fw-bold fs-5'>
                    My hours for today
                </Typography>
                <Typography variant='div' component="div"
                    sx={{
                        color: "#7DB00E",
                        fontWeight: "600",
                        fontSize: "18px",
                        cursor: "pointer"
                    }}
                >
                    + Add Time
                </Typography>

            </Typography>

            <Typography variant='div' component="div" className='mt-3 d-flex row'>

                <FormControl className='col-12 col-md-3' >
                    <label className='fw-bold ms-1' htmlFor="">Category</label>
                    <Select
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            borderRadius: "7px !important",
                            marginRight: "10px",
                            marginTop: "10px"
                        }}
                    >
                        <MenuItem value="">
                            <span>General</span>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='col-12 col-md-2' >

                    <label className='fw-bold ms-1' htmlFor="">Start</label>

                    <OutlinedInput value={start} onChange={(e) => setStart(e.target.value)} sx={{
                        height: "40px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        margin: "10px 10px 0 0",

                    }} />
                </FormControl>
                <FormControl className='col-12 col-md-2' >

                    <label className='fw-bold ms-1' htmlFor="">End</label>

                    <OutlinedInput value={end} onChange={(e) => setEnd(e.target.value)} sx={{
                        height: "40px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        margin: "10px 10px 0 0",

                    }} />
                </FormControl>
                <FormControl className='col-12 col-md-3' >
                    <label className='fw-bold ms-1' htmlFor="">Duration</label>

                    <OutlinedInput type='number' value={duration} onChange={(e) => setDuration(e.target.value)} sx={{
                        height: "40px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        margin: "10px 10px 0 0",

                    }} />
                </FormControl>

                <Typography className='col-12 col-md-2 p-0 p-md-3 mt-3 mt-md-0' variant='div' component="div" sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>

                    <Button
                        sx={{
                            background: "#7DB00E",
                            color: 'white',
                            fontWeight: "bold",
                            padding: "10px 3px",
                            fontSize: "15px",
                            fontFamily: 'Arial Rounded MT Bold',
                            borderRadius: "7px",
                            marginBottom: "5px",
                            border: "1px solid white",
                            "&:hover": {
                                opacity: "0.9",
                                border: "1px solid white"
                            }
                        }}
                    >Start
                    </Button>
                    <Button
                        sx={{
                            background: "transparent",
                            color: 'white',
                            fontWeight: "bold",
                            padding: "10px 3px",
                            fontSize: "15px",
                            fontFamily: 'Arial Rounded MT Bold',
                            borderRadius: "7px",
                            border: "1px solid white",
                            marginTop: "5px",
                            "&:hover": {
                                opacity: "0.5",
                                border: "1px solid white",
                            }
                        }}
                    >Cancel
                    </Button>

                </Typography>



            </Typography>

            <Typography variant='div' component="div" className='pe-md-3 mt-3'>
                <textarea placeholder='Notes' style={{
                    minWidth: "100%",
                    minHeight: "350px",
                    maxHeight: "350px",
                    background: "transparent",
                    color: "white",
                    padding: "10px",
                    fontSize: "18px",
                    border: "1px solid white",
                    borderRadius: "7px"
                }} ></textarea>
            </Typography>

            <Typography className='text-end pe-3 mt-2 fw-bold' variant='div' component="div" sx={{color: "#7DB00E"}}>
                Total Hours: {duration}
            </Typography>


        </Typography>
    )
}

export default Footer
