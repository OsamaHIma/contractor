import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import iconCalender from "../../../../../Icons/material-symbols_date-range-outline-rounded.png"

function Schedule({ start_time, setStart_time, day, setDay }) {

    const [selectedValues, setSelectedValues] = useState([]);

    // قم بتعريف دالة للتعامل مع تغييرات الـ checkbox
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        const isChecked = event.target.checked;


        if (isChecked) {
            setSelectedValues(value);
        } else {
            setSelectedValues((prevValues) =>
                prevValues.filter((item) => item !== value)
            );
        }
    };


    useEffect(() => {
        setDay(selectedValues)
    },[selectedValues , setDay])



    return (
        <Grid item md={6} xs={12}>

            <Typography variant='div' component="div" sx={{
                background: "#012939",
                borderTop: "2px solid #7DB00E",
                color: "white",
                padding: "30px",
                marginBottom: "30px"
            }}>
                <Typography variant='div' component="div"
                    sx={{ fontSize: "30px", fontWeight: "600" }}
                >
                    Schedule:
                </Typography>

                <Typography variant='div' component="div"
                    sx={{
                        fontSize: "18px",
                        fontWeight: "300",
                        margin: "15px 0 10px ",
                        color: "#ffffffe0"
                    }}
                >
                    If available, Which day works best for you?
                </Typography>

                <Typography variant='div' component="div" sx={{ fontSize: "30px" }}>
                    <FormControl sx={{
                        width: '45%',
                        position: "relative",
                        padding: "5px"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            position: "absolute",
                            right: "15px",
                            top: "15px"
                        }}>
                            <img className='w-100 h-100' src={iconCalender} alt="icon" />

                        </Typography>

                        <OutlinedInput type='date' value={start_time} onChange={(e) => setStart_time(e.target.value)} sx={{ border: "1px solid #ffffff8c", height: "45px", borderRadius: "7px !important" }} placeholder="" />

                    </FormControl>
                </Typography>

                <Typography variant='div' component="div">
                    <Typography>
                        Preferred time:
                    </Typography>

                    <FormGroup >
                        <RadioGroup onChange={handleCheckboxChange}>
                            <FormControlLabel control={<Radio sx={{ color: "#7DB00E" }} />} label="Anytime" value="Anytime" />
                            <FormControlLabel control={<Radio sx={{ color: "#7DB00E" }} />} label="Morning" value="Morning" />
                            <FormControlLabel control={<Radio sx={{ color: "#7DB00E" }} />} label="Afternoon" value="Afternoon" />
                            <FormControlLabel control={<Radio sx={{ color: "#7DB00E" }} />} label="Evening" value="Evening" />
                        </RadioGroup>
                    </FormGroup>

                </Typography>

            </Typography>

        </Grid>
    )
}

export default Schedule
