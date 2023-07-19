import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

function TaskComponent({ title }) {

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        {
            id: Math.floor(Math.random() * 1000),
            name: "Amet minim mollit non deserunt ullamco"
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: "Oliver Hansen"
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: "Omar Alexander"
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: "Kelly Snyder"
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: "Bradley Wilkerson"
        },
        
    ];


    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const [itemChoosen , setItemChoosen] = useState([])

    const GetSelectedItem = (item) => {
        setItemChoosen([...itemChoosen , item])
        console.log(itemChoosen);
    }





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

            <FormControl sx={{ width: "100%" }}>

                <FormControl sx={{ m: 1 }}>
                    <InputLabel sx={{color: "white" , marginTop: "3px"}} id="demo-multiple-checkbox-label">Choose task</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            borderRadius: "7px !important",
                            marginTop: "10px", 
                            color: "white"
                        }}
                    >
                        {names.map((item) => (

                            <MenuItem onClick={() => GetSelectedItem(item)} key={item.id} value={item.name}>
                                <Checkbox sx={{color: "#7db00e"}} checked={personName.indexOf(item.name) > -1} />
                                <ListItemText primary={item.name} />
                            </MenuItem>

                        ))}
                    </Select>
                </FormControl>

            </FormControl>

        </Typography>
    )
}

export default TaskComponent
