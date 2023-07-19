import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./AddNewJob.css"
import HeaderAddNew from '../../Request/AddNew/HeaderAddNew'
import CenterAddNew from './center/CenterAddNew'
import Footer from './footer/Footer'
import { sendDataAsync } from '../../../Redux/Slices/sendData/sendDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import Notify from '../../Notify'
import { ToastContainer } from 'react-toastify'

function AddNewJob() {

    const dispatch = useDispatch()

    const data = useSelector(state => state.sendData)


    const [load, setLoad] = useState(false)


    const [title, setTitle] = useState("")

    const [instruction, setInstruction] = useState("")

    const [start_day, setStart_day] = useState("")

    const [end_day, setEnd_day] = useState("")

    const [subtotal, setSubtotal] = useState("0")

    // const [arrival_window, setArrival_window] = useState("")

    const [date, setDate] = useState()





    const HandleClick = async () => {
        if (
            title &&
            instruction &&
            start_day &&
            end_day &&
            subtotal &&
            date
        ) {
            const data = {
                title,
                instruction,
                start_day,
                end_day,
                end_time: date,
                subtotal,

            }

            await dispatch(sendDataAsync(["job",
                {
                    data
                }]))
            setLoad(true)
        } else {
            Notify("please fill your data ", "warning")
        }
    }

    useEffect(() => {
        if (load) {
            if (data.loading === false) {
                if (data.status === 200) {
                    Notify(data.data.massage, "success")
                    setLoad(false)
                } else if (data.status === 400) {
                    Notify("Error Please Try Again Later", "error")
                }
            }
        }
    }, [load, data])


    return (
        <Typography variant='div' component="div" className='ADD-Job' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            height: "97vh"
        }}>
            <HeaderAddNew name="New Job" />
            <CenterAddNew title={title} setTitle={setTitle} instruction={instruction} setInstruction={setInstruction} />
            <Footer
                start_day={start_day}
                setStart_day={setStart_day}
                end_day={end_day}
                setEnd_day={setEnd_day}
                HandleClick={HandleClick}
                setSubtotal={setSubtotal}
                subtotal={subtotal}
                setDate={setDate}

            />
            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default AddNewJob
