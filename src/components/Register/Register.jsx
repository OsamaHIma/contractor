import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from "../../Icons/Logo.png"
import { Link, useNavigate } from 'react-router-dom'

import "./Register.css";
import { useDispatch, useSelector } from 'react-redux';
import { SignInAsync } from '../../Redux/Slices/SignInSlice';
import { ToastContainer } from 'react-toastify'
import Notify from '../Notify';


function Register() {

    const [load, setLoad] = useState(false)

    const dataSelector = useSelector(state => state.SignIng)

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [name, setName] = useState("")

    const [phone, setPhone] = useState("")

    const [day, setDay] = useState("")

    const [month, setMonth] = useState("")

    const [year, setYear] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const SendData = async () => {

        let data = {}

        let BirthDay = ""

        if (email !== "" && password !== "") {
            data = { email, password }
            document.getElementById("1").classList.remove("active")
            document.getElementById("2").classList.add("active")
        }
        if (name !== "" && phone !== "") {
            data = { email, password, name, phone }
            document.getElementById("2").classList.remove("active")
            document.getElementById("3").classList.add("active")
        } if (day !== "" && month !== "" && year !== "") {
            BirthDay = `${day}-${month}-${year}`
            data = { email, password, name, phone, BirthDay }
            await dispatch(SignInAsync(data))
            setLoad(true)
        }
    }

    useEffect(() => {
        if (load) {
            if (dataSelector?.data?.token) {
                Notify(dataSelector?.data?.message, "success")
                localStorage.setItem("user", JSON.stringify(dataSelector.data.user))
                localStorage.setItem("token", dataSelector.data.token)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
                setLoad(false)
            } else {
                Notify("Email already used", "error")
                setLoad(false)
            }
        }
    }, [dataSelector, navigate, load])


    return (
        <Typography variant='div' component="div" className='d-flex flex-column justify-content-between p-4 text-white ' sx={{ height: "100vh" }}>
            <Typography variant='div' component="div" className='d-flex justify-content-between flex-wrap'>
                <Typography variant='div' component="div">
                    <img src={Logo} alt="" />
                </Typography>
                <Typography className='fw-bold mt-1' variant='div' component="div" style={{ fontSize: "23px" }}>
                    1-555-777-888-21
                </Typography>
                <Typography variant='div' component="div">
                    <Link to="/login" className='text-white fw-bold' style={{ fontSize: "25px" }}>
                        Log In
                    </Link>
                </Typography>
            </Typography>

            <Typography variant='div' component="div"
                className='d-flex flex-column justify-content-center align-items-center h-100'>

                <Typography variant='div' component="div" className='d-flex flex-wrap' sx={{ fontSize: { sm: "2rem", md: "4rem", xs: "23px" }, fontWeight: "600" }}>
                    START YOUR
                    <Typography variant='span' component="span" className='ms-1 ms-md-2' sx={{
                        position: "relative",
                        "&:after": {
                            content: "''",
                            position: "absolute",
                            backgroundColor: "#7DB00E",
                            left: "0",
                            width: "100%",
                            height: "50%",
                            zIndex: "-1",
                            bottom: "0",
                        }
                    }}>
                        FREE TRIAL
                    </Typography>
                </Typography>

                <Typography className='normalText' variant='div' component="div" sx={{ fontSize: "1.5rem", fontWeight: "700", margin: "10px 0" }}>
                    Get all the features and support. No contract required.
                </Typography>

                <Typography variant='div' component="div" className='inputsRegister  d-flex flex-column align-items-center mt-4'>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                            <div id='1' className="carousel-item active">
                                <input type="email" placeholder='Email Company' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" placeholder='Add A Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div id='2' className="carousel-item">
                                <input type="name" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="number" placeholder='Your Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div id='3' className="carousel-item">
                                <div className="d-flex">
                                    <input type="number" placeholder='Day' value={day} onChange={(e) => setDay(e.target.value)} />
                                    <input type="number" placeholder='Month' value={month} onChange={(e) => setMonth(e.target.value)} />
                                    <input type="number" placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input onClick={SendData} type="submit" className='mt-2 p-2' value="START FREE TRIAL" style={{ backgroundColor: "#7DB00E" }} />
                </Typography>

            </Typography>

            <Typography variant='div' component="div" className='d-flex flex-column align-items-center  justify-content-end' >
                <Typography className='normalText' variant='div' component="div" sx={{ fontSize: "27px", textAlign: "center", fontWeight: "600" }}>
                    By clicking "Start Free Trial" you agree to receive information from Contractor Solution about our services, plus news and offers. You can unsubscribe at any time. You also agree to our
                    <Link style={{ color: "#7DB00E" }}>Terms of Service</Link> and
                    <Link style={{ color: "#7DB00E" }}>Privacy Policy.</Link>
                </Typography>
            </Typography>

            <ToastContainer autoClose={3000} />

        </Typography>
    )
}

export default Register
