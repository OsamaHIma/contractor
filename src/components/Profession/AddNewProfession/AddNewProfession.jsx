import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./AddNewProfession.css"
import { ToastContainer } from 'react-toastify'
import Content from './content/Content'
import Notify from '../../Notify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDataWithImg } from '../../../Redux/Slices/sendData/dataWithImgSlice'

function AddNewProfession() {

    const dispatch = useDispatch()

    const data = useSelector(state => state.dataWithImg)

    const [load, setLoad] = useState(false)

    const [name, setName] = useState("")

    const [describe, setDescribe] = useState("")

    const [file, setFile] = useState(null);

    const [img, setImg] = useState("")

    const HandleClick = async () => {
        if (
            name &&
            describe
        ) {
            const form = new FormData()
            form.append("name", name)
            form.append("describe", describe)
            form.append("company_id", Math.floor(Math.random() * 19))
            form.append("image", file?.target?.files[0])

            await dispatch(asyncDataWithImg(["profession", form]))
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

                    setName("")
                    setDescribe("")
                    setImg("")
                    setFile(null)
                    setLoad(false)
                    
                } else if (data.status === 400) {
                    Notify("Error Please Try Again Later", "error")
                }
            }
        }
    }, [load, data])


    return (
        <Typography variant='div' component="div" className='ADD-Profession' sx={{
            width: 0,
            position: "absolute",
            top: 0,
            right: "0",
            bottom: "0",
            background: "#10394A",
            zIndex: 2,
            transition: "800ms",
            overflow: "hidden",
            height: "100vh"
        }}>

            <Content
                name={name}
                setName={setName}
                describe={describe}
                setDescribe={setDescribe}
                HandleClick={HandleClick}
                file={file}
                setFile={setFile}
                img={img}
                setImg={setImg}
            />

            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default AddNewProfession
