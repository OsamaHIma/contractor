import React from 'react'
import { Avatar, FormControl, OutlinedInput, Typography } from '@mui/material'

function CompanyDetails({
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    emailAddress,
    setEmailAddress,
 }
    ) {
  return (
    <Typography variant='div' component="div" sx={{
        display: "flex",
        flexDirection: "column",
        padding: "7px 15px 15px 15px",
        borderRight: "1px solid white",
        borderBottom: "1px solid white",
        userSelect: "none"
    }}>

        {/* Company details And Avatar */}

        <Typography variant='div' component="div" sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0 "
        }}>
            <Avatar sx={{ background: "#7DB00E" }} src="/broken-image.jpg" />
            <Typography sx={{
                color: "white",
                fontSize: "25px",
                fontWeight: "bold",
                marginLeft: "10px"
            }} variant='span'>
                Company details
            </Typography>

        </Typography>

        {/* Title , First Name And Last Name Inputs */}

        <Typography variant='div' component="div" className=' flex-column flex-md-row' sx={{
            display: "flex",
        }}>



            {/* First Name Input */}

            <FormControl sx={{ flexGrow: 4 }}>
                <OutlinedInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" sx={{
                    height: "45px",
                    border: "1px solid #ffffff73",
                    borderRadius: "7px !important",
                    padding: "0",
                    marginRight: "10px",

                }} />
            </FormControl>

        </Typography>

        

        {/* Contact Details And Other Components*/}

        <Typography variant='div' component="div" sx={{
            display: "flex",
            flexDirection: "column"
        }}>

            {/* Contact Details */}

            <Typography sx={{ color: "white", fontSize: "25px", margin: "10px 0 20px" }}>
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
                

                <FormControl sx={{
                    width: "100%",
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
               


                <FormControl sx={{
                    width: "100%",
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
        </Typography>
    </Typography>
  )
}

export default CompanyDetails
