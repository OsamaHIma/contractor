import { Avatar, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React from 'react'

function ClientDetails({
    firstName,
    setFirstName,
    lastName,
    setLastName,
    companyName,
    setCompanyName,
    selectPhoneNumber,
    setSelectPhoneNumber,
    phoneNumber,
    setPhoneNumber,
    selectEmailAddress,
    setSelectEmailAddress,
    emailAddress,
    setEmailAddress,
    notification,
    setNotification,
    additional,
    setAdditional }) {





    return (

        <Typography variant='div' component="div" sx={{
            display: "flex",
            flexDirection: "column",
            padding: "7px 15px 15px 15px",
            borderRight: "1px solid white",
            borderBottom: "1px solid white",
            userSelect: "none"
        }}>

            {/* Client details And Avatar */}

            <Typography variant='div' component="div" sx={{
                display: "flex",
                alignItems: "center",
                padding: "7px"
            }}>
                <Avatar sx={{ background: "#7DB00E" }} src="/broken-image.jpg" />
                <Typography sx={{
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginLeft: "10px"
                }} variant='span'>
                    Client details
                </Typography>

            </Typography>

            {/* Title , First Name And Last Name Inputs */}

            <Typography variant='div' component="div" className=' flex-column flex-md-row' sx={{
                display: "flex",
            }}>



                {/* First Name Input */}

                <FormControl sx={{ flexGrow: 4 }}>
                    <OutlinedInput value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" sx={{
                        height: "45px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        marginRight: "10px",

                    }} />
                </FormControl>

                {/* Last Name Input */}

                <FormControl sx={{ flexGrow: 4 }}>
                    <OutlinedInput value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" sx={{
                        height: "45px",
                        border: "1px solid #ffffff73",
                        borderRadius: "7px !important",
                        padding: "0",
                        marginRight: "10px",

                    }} />
                </FormControl>

            </Typography>

            {/* Company Name And CheackBok */}

            <Typography variant='div' component="div" sx={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 0",
                padding: "2px"
            }}>

                {/* Company Name Input */}

                <OutlinedInput value={companyName} onChange={(e) => setCompanyName(e.target.value)} fullWidth placeholder="Company name" sx={{
                    height: "45px",
                    border: "1px solid #ffffff73",
                    borderRadius: "7px !important",
                    padding: "0",
                    marginRight: "10px",
                    color: "white",
                    width: "99%"

                }} />

                {/* CheackBok Input */}
                <FormGroup>
                    <FormControlLabel sx={{ color: "white", marginTop: "5px", width: "100%" }} control={<Checkbox sx={{ color: "#7DB00E" }} />} label="Use company name as the primary name" />
                </FormGroup>

            </Typography>

            {/* Contact Details And Other Components*/}

            <Typography variant='div' component="div" sx={{
                display: "flex",
                flexDirection: "column"
            }}>

                {/* Contact Details */}

                <Typography sx={{ color: "white", fontSize: "25px", marginBottom: "20px" }}>
                    Contact Details
                </Typography>

                {/* Phone Number And Main */}

                <Typography variant='div' component="div" sx={{
                    width: "100%",
                    border: "1px solid #ffffff73",
                    padding: "0",
                    borderRadius: "5px",
                    marginBottom: "10px"
                }}>
                    <FormControl sx={{ width: "20%", height: "100% !important", margin: "0 !important" }}>
                        <Select
                            value={selectPhoneNumber}
                            onChange={(e) => setSelectPhoneNumber(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                                borderRadius: "0px !important",
                                height: "55px !important",

                            }}
                        >
                            <MenuItem value="">
                                <span>Main</span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl sx={{
                        width: "80%",
                        padding: "0",
                        margin: "0 !important",
                        height: "100%"
                    }}>
                        <OutlinedInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone number" type='number' sx={{
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

                </Typography>

                {/* Add Phone Number */}

                <Typography variant='div' component="div" sx={{ color: "white", display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px", marginRight: "7px" }}>
                        +
                    </Typography>
                    <Typography sx={{ color: "#7DB00E", fontWeight: "bold" }}>
                        Add Phone Number
                    </Typography>
                </Typography>

                {/* Email Address And Main */}

                <Typography variant='div' component="div" sx={{
                    width: "100%",
                    border: "1px solid #ffffff73",
                    padding: "0",
                    borderRadius: "5px",
                    marginBottom: "20px"
                }}>
                    <FormControl sx={{ width: "20%", height: "100% !important", margin: "0 !important" }}>
                        <Select

                            value={selectEmailAddress}
                            onChange={(e) => setSelectEmailAddress(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                                borderRadius: "0px !important",
                                height: "55px !important",

                            }}
                        >
                            <MenuItem value="">
                                <span>Main</span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl sx={{
                        width: "80%",
                        padding: "0",
                        margin: "0 !important",
                        height: "100%"
                    }}>
                        <OutlinedInput value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="Email address" type='email' sx={{
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


                </Typography>


                {/* Add Email Address  */}

                <Typography variant='div' component="div" sx={{ color: "white", display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px", marginRight: "7px" }}>
                        +
                    </Typography>
                    <Typography sx={{ color: "#7DB00E", fontWeight: "bold" }}>
                        Add Email Address
                    </Typography>
                </Typography>

                {/* Two Inputs In The End */}

                <Typography variant='div' component="div" sx={{ marginBottom: "25px" }}>
                    <FormControl sx={{ width: "100%", height: "100% !important", margin: "0 !important" }}>
                        <Select
                            value={notification}
                            onChange={(e) => setNotification(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "",
                                borderRadius: "0px !important",
                                height: "35px !important",
                                border: "0",
                                borderTop: "1px solid white",
                                outline: "0 !important",
                                fontWeight: "bold"

                            }}
                        >
                            <MenuItem value="">
                                <span>Automated notifications</span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: "100%", height: "100% !important", marginTop: "10px  !important" }}>
                        <Select
                            value={additional}
                            onChange={(e) => setAdditional(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                background: "",
                                borderRadius: "0px !important",
                                height: "35px !important",
                                border: "0",
                                borderTop: "1px solid white",
                                outline: "0 !important",
                                fontWeight: "bold"

                            }}
                        >
                            <MenuItem value="">
                                <span>Additional client details</span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Typography>

            </Typography>



        </Typography>
    )
}

export default ClientDetails
