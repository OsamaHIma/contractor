import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./AddNewTask.css"
import HeaderAddNew from '../../Request/AddNew/HeaderAddNew'
import CenterAddNew from './center/centerAddNew'
import Footer from './Footer/Footer'
import { ToastContainer } from 'react-toastify'
import Notify from '../../Notify'
import { sendDataAsync } from '../../../Redux/Slices/sendData/sendDataSlice'
import { useDispatch, useSelector } from 'react-redux'

function AddNewTask() {

    const dispatch = useDispatch()

    const data = useSelector(state => state.sendData)

    const [load, setLoad] = useState(false)

    const [name, setName] = useState("")

    const [describe, setDescribe] = useState("")

    const [start_time, setStart_time] = useState("")

    const [end_time, setEnd_time] = useState("")

    const [date, setDate] = useState("")

    const [status, setStatus] = useState("")



    const HandleClick = async () => {

        if (
            name &&
            describe &&
            start_time &&
            end_time &&
            status
        ) {
            const data = {
                name,
                describe,
                start_time,
                end_time,
                status,
            }

            await dispatch(sendDataAsync(["task", data]))
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
        <Typography variant='div' component="div" className='ADD-Task' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            height: "100%",
        }}>

            <HeaderAddNew name="New Task" />
            <CenterAddNew
                name={name}
                setName={setName}
                describe={describe}
                setDescribe={setDescribe}
            />
            <Footer
                HandleClick={HandleClick}
                date={date}
                setDate={setDate}

                start_time={start_time}
                setStart_time={setStart_time}
                end_time={end_time}
                setEnd_time={setEnd_time}
                status={status}
                setStatus={setStatus}
            />

            <ToastContainer autoClose={3000} />



        </Typography>
    )
}

export default AddNewTask
