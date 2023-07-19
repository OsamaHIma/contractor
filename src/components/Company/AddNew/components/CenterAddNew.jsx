import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Notify from '../../../Notify';
import { sendDataAsync } from '../../../../Redux/Slices/sendData/sendDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import CompanyDetails from './centerComponents/CompanyDetails';
import PropertyDetails from './centerComponents/PropertyDetails';
import FooterCompany from './centerComponents/FooterCompany';

function CenterAddNew() {



// For Client Details

const [name, setName] = useState('');

const [phoneNumber, setPhoneNumber] = useState('');

const [emailAddress, setEmailAddress] = useState('');


// For Property Details

const [street1, setStreet1] = useState("")

const [street2, setStreet2] = useState("")

const [city, setCity] = useState("")

const [governorate, setGovernorate] = useState("")

const [zipCode, setZipCode] = useState("")

const [country, setCountry] = useState("")

const dispatch = useDispatch()

const [load, setLoad] = useState(false)

const data = useSelector(state => state.sendData)


const HandleClick = async () => {

    if (
        name !== "" &&
        phoneNumber !== "" &&
        emailAddress !== "" &&
        street1 !== "" &&
        street2 !== "" &&
        city !== "" &&
        governorate !== "" &&
        zipCode !== "" &&
        country !== ""
    ) 
    {
        const form = {
            name,
            phone: phoneNumber,
            email: emailAddress,
            address_1: street1,
            address_2: street2,
            country,
            governorate,
            city,
            zip_code: zipCode,
            user_id: Math.floor(Math.random() * 19),
        }

        await dispatch(sendDataAsync(["company", form]))

        setLoad(true)
    }
    else {
        Notify("please fill your data ", "warning")
    }
}



useEffect(() => {
    if (load) {
        if (data.loading === false) {
            if (data.status === 200) {
                
                Notify(data.data.message, "success")

                setName("")
                setPhoneNumber("")
                setEmailAddress("")
                setStreet1("")
                setStreet2("")
                setCountry("")
                setGovernorate("")
                setZipCode("")
                setCountry("")
                setCity("")

                setLoad(false)
                
            } else if (data.status === 400) {
                Notify("Error Please Try Again Later", "error")
            }
        }
    }
}, [load, data])


  return (
    <Typography variant='div' component="div" sx={{
        background: "#012939",
        border: "1px solid white",
        padding: "0px 10px 30px 0px",
        borderTop: "5px solid #7DB00E",
        marginTop: "30px"
    }}>
        <Grid container >
            <Grid item xs={12} md={6}>
                <CompanyDetails name={name}
                    setName={setName}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    emailAddress={emailAddress}
                    setEmailAddress={setEmailAddress}
                />

            </Grid>
            <Grid item xs={12} md={6}>
                <PropertyDetails
                    street1={street1}
                    setStreet1={setStreet1}
                    street2={street2}
                    setStreet2={setStreet2}
                    city={city}
                    setCity={setCity}
                    governorate={governorate}
                    setGovernorate={setGovernorate}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    country={country}
                    setCountry={setCountry}
                />
            </Grid>
        </Grid>

        <FooterCompany HandleClick={HandleClick}/>

        <ToastContainer autoClose={3000} />

    </Typography>
  )
}

export default CenterAddNew
