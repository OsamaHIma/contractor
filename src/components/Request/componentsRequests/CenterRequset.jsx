
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import PlusImg from '../../../Icons/🦆 icon _plus_.png';
import useRequsetCenter from '../../../Hooks/useRequsetCenter';

import React from 'react'

import { Button, FormControl, MenuItem, Select } from '@mui/material';
import useRequest from '../../../Hooks/useRequest';


function CenterRequset() {

    const { Search, SearchIconWrapper, StyledInputBase, handleChange, handleChange2, age1, age2  } = useRequsetCenter()

    const {HandleAddOpenProject} = useRequest()


    return (

        <Typography className='row' variant='div' component="div" sx={{ marginTop: "10px", display: "flex", justifyContent: "start", alignItems: "center" }}>
            <Typography variant='h4' sx={{ margin: "10px 0", color: "white", fontWeight: "600", paddingLeft: "0", fontSize: "30px" }}>
                Requset
            </Typography>
            <Typography className='col-lg-3 col-md-6 col-12 ps-0' variant='div' component="div" >
                <Search sx={{ margin: "0 !important", color: "white", background: "rgba(225, 225, 225, 0.4);" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
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
                                <span>Date</span>
                            </MenuItem>
                            <MenuItem value={"2020"}>2020</MenuItem>
                            <MenuItem value={"2021"}>2021</MenuItem>
                            <MenuItem value={"2022"}>2022</MenuItem>
                            <MenuItem value={"2023"}>2023</MenuItem>
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
                                <span>Status</span>
                            </MenuItem>
                            <MenuItem value={"Ten"}>Cancellen</MenuItem>
                            <MenuItem value={"Twenty"}>Working</MenuItem>
                            <MenuItem value={"Thirty"}>Done</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Typography>
            <Typography variant='div' component="div" className='col-lg-5 col-md-3 col-12 d-md-flex align-items-end justify-content-end mt-md-0 mt-2 p-0' >
                <Button onClick={HandleAddOpenProject} className='btn' style={{ background: "#7DB00E", color: "white", fontWeight: "bold"}}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <span style={{ marginRight: "5px" }}><img src={PlusImg} alt="" /></span>
                        <span>Add Requset</span>
                    </div>
                </Button>
            </Typography>
        </Typography>
    )
}

export default CenterRequset
