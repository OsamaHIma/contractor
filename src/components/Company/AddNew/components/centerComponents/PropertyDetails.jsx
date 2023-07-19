import React from 'react'
import { Avatar, FormControl, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import iconHome from "../../../../../Icons/icon _home_.png"


function PropertyDetails({
    street1,
    setStreet1,
    street2,
    setStreet2,
    city,
    setCity,
    governorate,
    setGovernorate,
    zipCode,
    setZipCode,
    country,
    setCountry,

}) {
    return (
        <Typography variant='div' component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 10px 15px 15px",
                borderBottom: "1px solid white",
                height: "100%",
                userSelect: "none"
            }}
        >

            {/* Property details And Avatar */}

            <Typography variant='div' component="div" sx={{
                display: "flex",
                alignItems: "center",
                padding: "7px 0",

            }}>
                <Avatar sx={{ background: "#7DB00E" }}  >
                    <img src={iconHome} alt="" />
                </Avatar>
                <Typography sx={{
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginLeft: "10px"
                }} variant='span'>
                    Property details
                </Typography>

            </Typography>

            {/* Street1 */}

            <Typography variant='div' component="div">
                <OutlinedInput value={street1} onChange={(e) => setStreet1(e.target.value)} fullWidth placeholder="Street 1" sx={{
                    height: "45px",
                    border: "1px solid #ffffff73",
                    borderRadius: "7px !important",
                    padding: "0",
                    marginRight: "10px",
                    color: "white",
                    width: "99%",
                    margin: "10px 0"

                }} />
            </Typography>

            {/* Street2 */}

            <Typography variant='div' component="div">
                <OutlinedInput value={street2} onChange={(e) => setStreet2(e.target.value)} fullWidth placeholder="Street 2" sx={{
                    height: "45px",
                    border: "1px solid #ffffff73",
                    borderRadius: "7px !important",
                    padding: "0",
                    marginRight: "10px",
                    color: "white",
                    width: "99%",
                    margin: "10px 0"

                }} />
            </Typography>

            {/* City And State */}

            <Typography variant='div' component="div" className='d-flex flex-column flex-md-row'>

                <FormControl sx={{ width: "50%" }}>
                    <OutlinedInput value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" sx={{
                        height: "45px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        marginRight: "10px",

                    }} />
                </FormControl>

                <FormControl sx={{ width: "50%" }}>
                    <OutlinedInput value={governorate} onChange={(e) => setGovernorate(e.target.value)} placeholder="State" sx={{
                        height: "45px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        marginRight: "10px",

                    }} />
                </FormControl>

            </Typography>

            {/* ZIP Code */}

            <Typography variant='div' component="div">
                <Typography variant='div' component="div" sx={{
                    width: "100%",
                    border: "1px solid #ffffff73",
                    padding: "0",
                    borderRadius: "5px",
                    margin: "10px 0"
                }}>

                    <FormControl sx={{
                        width: "50%",
                        padding: "0",
                        margin: "0 !important",
                        height: "100%"
                    }}>
                        <OutlinedInput value={zipCode} onChange={((e) => setZipCode(e.target.value))} placeholder="Zip code" type='number' sx={{
                            height: "100%",
                            border: "0",
                            outline: "0",
                            "&:hover": {
                                border: "0 !important",
                                outline: "0 !important",
                            },
                            padding: "0",
                            borderRadius: "0 !important",
                        }} />
                    </FormControl>


                    <FormControl sx={{ width: "50%", height: "100% !important", margin: "0 !important" }}>
                        <Select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}

                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                                borderRadius: "0px !important",
                                height: "55px !important",

                            }}
                        >
                            <MenuItem value="">
                                <span>Country</span>
                            </MenuItem>
                            <MenuItem value={"Egypt"}>Egypt</MenuItem>
                            <MenuItem value={"Ksa"}>Ksa</MenuItem>
                            <MenuItem value={"Kwa"}>Kwa</MenuItem>
                        </Select>
                    </FormControl>

                </Typography>
            </Typography>

            {/* Cheack Box  */}

        </Typography>
    )
}

export default PropertyDetails
