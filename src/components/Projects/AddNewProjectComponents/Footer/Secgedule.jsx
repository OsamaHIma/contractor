import { Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import "./index.css"

function Secgedule({ title, inputText, select, active }) {




    return (
        <Typography variant='div' component="div" sx={{
            background: "#012939",
            minHeight: "150px",
            width: "100%",
            marginBottom: "20px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "20px"
        }}>
            <Typography variant='div' component="div">
                <Typography className='Text' variant='h5'>
                    {title}

                </Typography>

            </Typography>

            <Typography variant='div' component="div">
                <Typography className='Text' variant='div' >
                    {inputText ? (
                        <Grid container variant='div' component="div" sx={{ display: "flex", marginTop: "20px" }}>
                            <Grid xl={4} xs={12} lg={5} item variant='div' component="div">
                                <label style={{ marginBottom: "10px" }} htmlFor="StartDate">Start date:</label>
                                <input style={{ color: "white", background: "transparent", padding: "9px", border: "1px solid white", borderRadius: "5px" }} type='number' id='StartDate' />
                            </Grid>
                            <Grid className='mt-2 mt-lg-0  ms-xl-4 ms-0' item xl={4} lg={5} xs={12} variant='div' component="div">
                                <label style={{ marginBottom: "10px" }} htmlFor="EndDate">End date:</label>
                                <input style={{ color: "white", background: "transparent ", padding: "9px", border: "1px solid white", borderRadius: "5px" }} type='number' id='EndDate' />
                            </Grid>
                        </Grid>
                    ) : null}
                </Typography>

            </Typography>


            {select === "Choose task" ? (
                <FormControl sx={{ width: "100%" }}>
                    <Select
                        onChange=""
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            borderRadius: "7px !important",
                            marginTop: "10px"
                        }}
                    >
                        <MenuItem value="">
                            <span>{select} :</span>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                    </Select>

                </FormControl>
            )
                :
                (
                    <FormControl sx={{ width: "100%" }}>
                        <Select
                            onChange=""

                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                                borderRadius: "7px !important",
                                marginTop: "10px"
                            }}
                        >
                            <MenuItem value="">
                                <span>{select ? select : ""}</span>
                            </MenuItem>
                            <MenuItem value={"Ten"}>Ten</MenuItem>
                            <MenuItem value={"Twenty"}>Twenty</MenuItem>
                            <MenuItem value={"Thirty"}>Thirty</MenuItem>
                        </Select>

                    </FormControl>
                )



            }

            {active ? (
                <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                    <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} sx={{ color: "white" }} label={active} />
                </Typography>
            ) : null}


        </Typography>
    )
}

export default Secgedule
