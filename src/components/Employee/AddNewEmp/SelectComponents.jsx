import { FormControl,TextField, Typography } from '@mui/material'
import React from 'react'

function SelectComponents({ type, inventory, price, setType, setInventory, setPrice }) {


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


        <Typography variant='div' component="div"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px"
            }}>

            <FormControl sx={{ width: "48%", margin: "0 !important" }}>
                <span className='textColor mb-2 fw-bold'>profession_id</span>
                <TextField
                    className='PriceText '
                    sx={{ padding: "5px 0", margin: "7px 5px !important" }}
                    value={type}
                    onChange={HandleType}
                />
            </FormControl>


            <FormControl sx={{ width: "48%", margin: "0 !important" }}>
                <span className='textColor mb-2 fw-bold'>hourly_salary</span>
                <TextField
                    className='PriceText '
                    sx={{ padding: "5px 0", margin: "7px 5px !important" }}
                    value={inventory}
                    onChange={HandleInventory}
                />
            </FormControl>


            <FormControl sx={{ width: "48%", margin: "0 !important" }}>
                <span className='textColor mb-2 fw-bold'>monthly_salary</span>
                <TextField
                    className='PriceText '
                    sx={{ padding: "5px 0", margin: "7px 5px !important" }}
                    value={price}
                    onChange={HandlePrice}
                />

            </FormControl>

        </Typography>


        // <Grid container spacing={3}>
        //     <Grid item xs={12} md={5}>


        //         <FormControl sx={{ width: "48%", margin: "0 !important" }}>
        //             <span className='textColor mb-2 fw-bold'>profession_id</span>
        //             <TextField
        //                 className='PriceText '
        //                 sx={{ padding: "5px 0", margin: "7px 0 0 0 !important" }}
        //                 value={type}
        //                 onChange={HandleType}
        //             />

        //         </FormControl>



        //     </Grid>
        //     <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "space-between" }}>


        //         <FormControl sx={{ width: "48%", margin: "0 !important" }}>
        //             <span className='textColor mb-2 fw-bold'>hourly_salary</span>
        //             <TextField
        //                 className='PriceText '
        //                 sx={{ padding: "5px 0", margin: "7px 0 0 0 !important" }}
        //                 value={inventory}
        //                 onChange={HandleInventory}
        //             />

        //         </FormControl>



        //         <FormControl sx={{ width: "48%", margin: "0 !important" }}>
        //             <span className='textColor mb-2 fw-bold'>monthly_salary</span>
        //             <TextField
        //                 className='PriceText '
        //                 sx={{ padding: "5px 0", margin: "7px 0 0 0 !important" }}
        //                 value={price}
        //                 onChange={HandlePrice}
        //             />

        //         </FormControl>


        //     </Grid>
        // </Grid>
    )
}

export default SelectComponents
