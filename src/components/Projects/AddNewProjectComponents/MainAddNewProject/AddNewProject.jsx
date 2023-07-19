import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HeaderAddNew from '../ComponentAddNewProject/HeaderAddNew'
import CenterAddNew from '../ComponentAddNewProject/CenterAddNew'
import Footer from '../Footer/Footer'

import "./AddNewProject.css"
import { asyncDataWithImg } from '../../../../Redux/Slices/sendData/dataWithImgSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Notify from '../../../Notify'



function AddNewProject() {

    const [subtotal , setSubtotal] = useState("")

    const [load , setLoad] = useState(false)

    const data = useSelector(state => state.dataWithImg)

    const dispatch = useDispatch()

    const [name, setName] = useState("")

    const [budget, setBudget] = useState(0)

    const [start_time, setStart_time] = useState(0)

    const [end_time, setEnd_time] = useState(0)

    const [file, setFile] = useState(null);

    const [img, setImg] = useState("")


    const fd = new FormData()

    const HandleClick = async () => {

        if (name !== "" &&  budget !== 0 && file !== null && start_time !== 0 && end_time !== 0  ) {
            fd.append("name", name);

            fd.append("describe", budget);

            fd.append("budget", budget);

            fd.append("company_id", Math.floor(Math.random() * 19));

            fd.append("client_id", Math.floor(Math.random() * 19));

            fd.append("supervisor_id", Math.floor(Math.random() * 19));

            fd.append("image", file?.target?.files[0]);

            await dispatch(asyncDataWithImg(["project", fd]))

            setLoad(true)
        }else {
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

    },[data , load])


    return (
        <Typography variant='div' component="div" className='ADD-Project' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            height: "100%"
        }}>
            <HeaderAddNew />
            <CenterAddNew budget={budget} setBudget={setBudget} setImg={setImg} img={img} setFile={setFile} file={file} setName={setName} name={name}/>
            <Footer setSubtotal={setSubtotal}  subtotal={subtotal} start_time={start_time} setStart_time={setStart_time} end_time={end_time} setEnd_time={setEnd_time} HandleClick={HandleClick}/>
            <ToastContainer autoClose={3000} />

        </Typography>
    )
}

export default AddNewProject
