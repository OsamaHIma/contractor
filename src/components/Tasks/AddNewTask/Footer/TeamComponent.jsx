import { Checkbox, FormControl, FormControlLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import TeamsAdded from '../../../Projects/AddNewProjectComponents/Footer/team/TeamsAdded'
import useTeam from '../../../../Hooks/useTeam'

function TeamComponent({ status, setStatus }) {
    
    // const {team , handleChange , DeleteItem  } = useTeam()


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
                    Team:
                </Typography>
            </Typography>
            <FormControl sx={{ width: "100%" }}>
                <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                        borderRadius: "7px !important",
                        marginTop: "10px"
                    }}
                >
                    <MenuItem value="">
                        <span>Choose team :</span>
                    </MenuItem>
                    <MenuItem value={"Ten"}>Ten</MenuItem>
                    <MenuItem value={"Twenty"}>Twenty</MenuItem>
                    <MenuItem value={"Thirty"}>Thirty</MenuItem>
                </Select>

                <div className='d-flex flex-wrap'>
                    {/* <TeamsAdded team={team} DeleteItem={DeleteItem} /> */}
                </div>

            </FormControl>

            <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} sx={{ color: "white" }} label="Email team about assignment" />
            </Typography>

        </Typography> 
    )
}

export default TeamComponent
