import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import useSchedule from './useSchedule';

function CenterSchedule() {


    const {
        Search,
        SearchIconWrapper,
        StyledInputBase,
        handleChange,
        handleChange2,
        handleChange3,
        age1,
        age2,
        more
    } = useSchedule()

    return (
        <Typography className='row' variant='div' component="div" sx={{ marginTop: "10px", display: "flex", justifyContent: "start", alignItems: "center" }}>
            <Typography variant='h4' sx={{ margin: "10px 0", color: "white", fontWeight: "600", paddingLeft: "0", fontSize: "30px" }}>
                Schedule
            </Typography>
            <Typography className='col-lg-3 col-md-6 col-12 ps-0' variant='div' component="div" >
                <Search sx={{ margin: "0 !important", color: "white", background: "rgba(225, 225, 225, 0.4);" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Schedule.."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ width: "100%" }}
                    />
                </Search>
            </Typography>
            <Typography className='col-lg-4 col-md-6 col-12 d-md-flex ps-0' variant='div' component="div" >

                <div className='col-md-6 col-12'>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                            value={age1}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <span>Month</span>
                            </MenuItem>
                            <MenuItem value={"Ten"}>Ten</MenuItem>
                            <MenuItem value={"Twenty"}>Twenty</MenuItem>
                            <MenuItem value={"Thirty"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='col-md-6 col-12 ms-md-2 '>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <Select
                            value={age2}
                            onChange={handleChange2}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <span>More Action</span>
                            </MenuItem>
                            <MenuItem value={"Ten"}>Ten</MenuItem>
                            <MenuItem value={"Twenty"}>Twenty</MenuItem>
                            <MenuItem value={"Thirty"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Typography>
            <Typography variant='div' component="div" className='col-lg-5 col-md-3 col-12 d-md-flex align-items-end justify-content-end mt-md-0 mt-2 p-0' >
                <FormControl>
                    <Select className='btn' sx={{
                        background: "#7DB00E",
                        color: "white",
                        fontWeight: "bold",
                        width: "155px"
                    }}

                        value={more}
                        onChange={handleChange3}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >


                        <MenuItem value="">
                            <span>More Action</span>
                        </MenuItem>
                        <MenuItem value={"Ten"}>Ten</MenuItem>
                        <MenuItem value={"Twenty"}>Twenty</MenuItem>
                        <MenuItem value={"Thirty"}>Thirty</MenuItem>
                    </Select>


                </FormControl>

            </Typography>
        </Typography>
    )
}

export default CenterSchedule
