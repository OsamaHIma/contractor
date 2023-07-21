import { Checkbox, Chip, FormControl, FormControlLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import useTeam from '../../../../../Hooks/useTeam'
import TeamsAdded from './TeamsAdded'
import { Clear} from '@mui/icons-material'

function TeamComponent({ setSubtotal , subtotal}) {

    const {team , DeleteItem } = useTeam()
    const [selectedMembers, setSelectedMembers] = useState(['Ali',"Mohammed"]);

    const handleMemberSelect = (event) => {
        const selected = event.target.value;
        setSelectedMembers([...selectedMembers, selected]);
    };

    const handleMemberRemove = (member) => {
        setSelectedMembers(selectedMembers.filter((m) => m !== member));
    };

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
                    value={''}
                    onChange={handleMemberSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                        borderRadius: "7px !important",
                        marginTop: "10px"
                    }}
                >
                    <MenuItem value={''}>
                        <span>Choose team :</span>
                    </MenuItem>
                    <MenuItem value={"Ali"}>Ali</MenuItem>
                    <MenuItem value={"Omar"}>Omar</MenuItem>
                    <MenuItem value={"Ahmed"}>Ahmed</MenuItem>
                </Select>
               <div className="flex gap-3 flex-wrap">
               {selectedMembers.map((member) => (
                    <Chip
                        key={member}
                        label={member}
                        onDelete={() => handleMemberRemove(member)}
                        sx={{
                            background: "#5b737c",
                            color: "white",
                            display:"flex",
                            width:"150px",
                            justifyContent:"space-between",
                            paddingY:"1.7rem",
                            borderRadius: "7px",
                            marginTop: "10px",
                            '& .MuiChip-icon': {
                                color: 'rgba(255, 255, 255, 0.7)',
                            },
                            '& .MuiChip-icon:hover': {
                                color: 'rgba(255, 255, 255, 1)',
                            },
                        }}
                        deleteIcon={<Clear className=' !text-slate-100'/>}
                    />
                ))}
               </div>
                <div className='d-flex flex-wrap'>
                    <TeamsAdded team={team} DeleteItem={DeleteItem}/>
                </div>
            </FormControl>
            <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} sx={{ color: "white" }} label="Email team about assignment" />
            </Typography>
        </Typography>
    )
}

export default TeamComponent