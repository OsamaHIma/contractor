import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

function RegionalSettings() {

    const [country, setCountry] = useState('');
    const [timeFormat, setTimeFormat] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [dateFormat, setDateFormat] = useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
    const handleChangeTimeFormat = (event) => {
        setTimeFormat(event.target.value);
    };
    const handleChangeDayOfWeek = (event) => {
        setDayOfWeek(event.target.value);
    };
    const handleChangeTimeZone = (event) => {
        setTimeZone(event.target.value);
    };
    const handleChangeDateFormat = (event) => {
        setDateFormat(event.target.value);
    };

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
                    Regional settings:
                </Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <FormControl sx={{ width: "100%" }}>
                            <Select
                                value={country}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "4px 12px",
                                    border: "1px solid rgba(255, 255, 255, 0.67)",
                                    fontSize: "17px",
                                    width: "100%"
                                }}
                            >
                                <MenuItem value="">
                                    <span>Country</span>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: "100%" }}>
                            <Select
                                value={timeFormat}
                                onChange={handleChangeTimeFormat}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "4px 12px",
                                    border: "1px solid rgba(255, 255, 255, 0.67)",
                                    fontSize: "17px",
                                    width: "100%"
                                }}
                            >
                                <MenuItem value="">
                                    <span>Time Format</span>
                                </MenuItem>
                                <MenuItem value={40}>Ten</MenuItem>
                                <MenuItem value={50}>Twenty</MenuItem>
                                <MenuItem value={60}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: "100%" }}>
                            <Select
                                value={dayOfWeek}
                                onChange={handleChangeDayOfWeek}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "4px 12px",
                                    border: "1px solid rgba(255, 255, 255, 0.67)",
                                    fontSize: "17px",
                                    width: "100%"
                                }}
                            >
                                <MenuItem value="">
                                    <span>Country</span>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>


                    </Grid>
                    <Grid item xs={12} md={6}>

                        <FormControl sx={{ width: "100%" }}>
                            <Select
                                value={timeZone}
                                onChange={handleChangeTimeZone}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "4px 12px",
                                    border: "1px solid rgba(255, 255, 255, 0.67)",
                                    fontSize: "17px",
                                    width: "100%"
                                }}
                            >
                                <MenuItem value="">
                                    <span>TimeZone</span>
                                </MenuItem>
                                <MenuItem value={40}>Ten</MenuItem>
                                <MenuItem value={50}>Twenty</MenuItem>
                                <MenuItem value={60}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        
                        <FormControl sx={{ width: "100%" }}>
                            <Select
                                value={dateFormat}
                                onChange={handleChangeDateFormat}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "4px 12px",
                                    border: "1px solid rgba(255, 255, 255, 0.67)",
                                    fontSize: "17px",
                                    width: "100%"
                                }}
                            >
                                <MenuItem value="">
                                    <span>Date Format</span>
                                </MenuItem>
                                <MenuItem value={40}>Ten</MenuItem>
                                <MenuItem value={50}>Twenty</MenuItem>
                                <MenuItem value={60}>Thirty</MenuItem>
                            </Select>
                        </FormControl>


                    </Grid>
                </Grid>

            </Typography>
        </Typography>
    )
}

export default RegionalSettings
