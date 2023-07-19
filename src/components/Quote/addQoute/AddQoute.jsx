import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import Notify from '../../Notify'
import { sendDataAsync } from '../../../Redux/Slices/sendData/sendDataSlice';
import "./AddQoute.css"
import Content from './Content/Content';

function AddQoute() {


    const dispatch = useDispatch()

    const data = useSelector(state => state.sendData)

    const [load, setLoad] = useState(false)

    const [title, setTitle] = useState("")

    const [subtotal, setSubtotal] = useState("0")

    const [discount, setDiscount] = useState("")

    const [type_discount, setType_discount] = useState("")

    const [tax_name, setTax_name] = useState("")

    const [tax_describe, setTax_describe] = useState("")

    const [tax_rate, setTax_rate] = useState("")

    const [total, setTotal] = useState("")

    const [note, setNote] = useState("")

    const HandleClick = async () => {

        if (
            title &&
            discount &&
            type_discount &&
            subtotal &&
            tax_name &&
            tax_describe &&
            tax_rate &&
            total &&
            note

        ) {
            const data =
            {
                title,
                subtotal,
                discount,
                type_discount,
                tax_name,
                tax_describe,
                tax_rate,
                total,
                note,
                company_id: Math.floor(Math.random() * 19),
                client_id: Math.floor(Math.random() * 19),
            }
            await dispatch(sendDataAsync(["quote", data]))
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
        <Typography variant='div' component="div" className='ADD-Quote' sx={{
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
                HandleClick={HandleClick}
                title={title}
                setTitle={setTitle}
                subtotal={subtotal}
                setSubtotal={setSubtotal}
                discount={discount}
                setDiscount={setDiscount}
                type_discount={type_discount}
                setType_discount={setType_discount}
                tax_name={tax_name}
                setTax_name={setTax_name}
                tax_describe={tax_describe}
                setTax_describe={setTax_describe}
                tax_rate={tax_rate}
                setTax_rate={setTax_rate}
                total={total}
                setTotal={setTotal}
                note={note}
                setNote={setNote}
            />
            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default AddQoute
