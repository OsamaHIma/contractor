import { FormControl, Grid, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

function SelectComponents({type, setType , inventory, setInventory , price, setPrice}) {

    

    const HandleType = (e) => {
        setType(e.target.value)

    }
    const HandleInventory = (e) => {
        setInventory(e.target.value)

    }
    const HandlePrice = (e) => {
        setPrice(e.target.value)

    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={5}>

                <FormControl sx={{ width: "100%", }}>
                    <span className='textColor mb-2 fw-bold'>Type</span>

                    <Select
                        sx={{ background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)" }}
                        value={type}
                        onChange={HandleType}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <span>White cement</span>
                        </MenuItem>
                        <MenuItem value={"red"}>red</MenuItem>
                        <MenuItem value={"blue"}>blue</MenuItem>
                        <MenuItem value={"green"}>green</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
            <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "space-between" }}>

                <FormControl sx={{ width: "48%" }}>
                    <span className='textColor mb-2 fw-bold'>Inventory</span>
                    <Select
                        sx={{ background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)" }}
                        value={inventory}
                        onChange={HandleInventory}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <span>0</span>
                        </MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                    </Select>
                </FormControl>


                <FormControl  sx={{ width: "48%" , margin: "0 !important" }}>
                    <span className='textColor mb-2 fw-bold'>Price</span>
                    <TextField
                    className='PriceText '
                        sx={{ padding: "5px 0" , margin: "7px 0 0 0 !important" }}
                        value={price}
                        onChange={HandlePrice}
                    />
                    
                </FormControl>


            </Grid>
        </Grid>
    )
}

export default SelectComponents
