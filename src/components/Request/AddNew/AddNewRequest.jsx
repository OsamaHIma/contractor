import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import "./AddNewRequest.css"
import FooterBtnsReq from './FooterBtnsReq'
import HeaderAddNew from './HeaderAddNew'
import CenterAddNewRequest from './CenterAddNewRequest'
import End from './CenterComponents/End/End'
import { useDispatch, useSelector } from 'react-redux'
import Notify from '../../Notify'
import { sendDataAsync } from '../../../Redux/Slices/sendData/sendDataSlice'
import { ToastContainer } from 'react-toastify'

function AddNewRequest() {

    const dispatch = useDispatch()

    const data = useSelector(state => state.sendData)

    console.log(data);


    const [load, setLoad] = useState(false)


    const [title, setTitle] = useState("")

    const [instruction, setInstruction] = useState("")

    const [start_time, setStart_time] = useState("")

    const [day, setDay] = useState("")



    const HandleClick = async () => {
        if (
            title &&
            instruction &&
            start_time &&
            day
        ) {
            const data = {
                title,
                instruction,
                start_time,
                day,
                client_id: Math.floor(Math.random() * 45),
                company_id: Math.floor(Math.random() * 19),
                team_id: Math.floor(Math.random() * 45)
            }

            console.log(data);

            await dispatch(sendDataAsync(["request",
                
                    data
                ]))
            setLoad(true)
        } else {
            Notify("please fill your data ", "warning")
        }
    }

    useEffect(() => {
        if (load) {
            if (data.loading === false) {
                if (data.status === 200) {
                    Notify(data.data.message, "success")
                    setLoad(false)
                } else if (data.status === 400) {
                    Notify("Error Please Try Again Later", "error")
                }
            }
        }
    }, [load, data])


    return (
        <Typography variant='div' component="div" className='ADD-Request' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            minHeight: "100vh"
        }}>

            <HeaderAddNew />
            <CenterAddNewRequest title={title} setTitle={setTitle} instruction={instruction} setInstruction={setInstruction} />
            <End
                start_time={start_time}
                setStart_time={setStart_time}
                day={day} 
                setDay={setDay}
            />
            <FooterBtnsReq HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default AddNewRequest
