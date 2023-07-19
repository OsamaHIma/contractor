import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FooterBtnClient from './FooterBtnClient'
import ClientDetails from './CenterComponents/ClientDetails'
import PropertyDetails from './CenterComponents/PropertyDetails'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { sendDataAsync } from '../../../../Redux/Slices/sendData/sendDataSlice'
import Notify from '../../../Notify'

function CenterAddClient() {

    // For Client Details

    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [companyName, setCompanyName] = useState('');

    const [selectPhoneNumber, setSelectPhoneNumber] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

    const [selectEmailAddress, setSelectEmailAddress] = useState('');

    const [emailAddress, setEmailAddress] = useState('');

    const [notification, setNotification] = useState('');

    const [additional, setAdditional] = useState('');

    // For Property Details

    const [street1, setStreet1] = useState("")

    const [street2, setStreet2] = useState("")

    const [city, setCity] = useState("")

    const [state, setState] = useState("")

    const [zipCode, setZipCode] = useState("")

    const [country, setCountry] = useState("")

    const [additionalProperty, setAdditionalProperty] = useState("")

    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    const data = useSelector(state => state.sendData)

    const HandleClick = async () => {

        if (
            firstName !== "" &&
            lastName !== "" &&
            companyName !== "" &&
            phoneNumber !== "" &&
            emailAddress !== "" &&
            street1 !== "" &&
            street2 !== "" &&
            city !== "" &&
            state !== "" &&
            zipCode !== "" &&
            country !== ""
        ) 
        {
            const form = {
                first_name: firstName,
                last_name: lastName,
                name_company: companyName,
                phone: phoneNumber,
                email: emailAddress,
                address_1: street1,
                address_2: street2,
                country: country,
                governorate: state,
                city: city,
                zip_code: zipCode,
                company_id: Math.floor(Math.random() * 19),
            }

            await dispatch(sendDataAsync(["client", form]))

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
                    
                    Notify(data.data.massege, "success")

                    setFirstName("")
                    setLastName("")
                    setCompanyName("")
                    setPhoneNumber("")
                    setEmailAddress("")
                    setStreet1("")
                    setStreet2("")
                    setCountry("")
                    setState("")
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
        }}>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <ClientDetails firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                        companyName={companyName}
                        setCompanyName={setCompanyName}
                        selectPhoneNumber={selectPhoneNumber}
                        setSelectPhoneNumber={setSelectPhoneNumber}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        selectEmailAddress={selectEmailAddress}
                        setSelectEmailAddress={setSelectEmailAddress}
                        emailAddress={emailAddress}
                        setEmailAddress={setEmailAddress}
                        notification={notification}
                        setNotification={setNotification}
                        additional={additional}
                        setAdditional={setAdditional}
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
                        state={state}
                        setState={setState}
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        country={country}
                        setCountry={setCountry}
                        additionalProperty={additionalProperty}
                        setAdditionalProperty={setAdditionalProperty}
                    />
                </Grid>
            </Grid>

            <FooterBtnClient HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />

        </Typography>
    )
}

export default CenterAddClient
