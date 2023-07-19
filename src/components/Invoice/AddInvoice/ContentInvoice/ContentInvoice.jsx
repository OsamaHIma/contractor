import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import InvoiceImgComponent from './components/InvoiceImgComponent'
import InputsLeft from './components/InputsLeft'
import InputsRight from './components/InputsRight'
import Notify from '../../../Notify'
import { useDispatch, useSelector } from 'react-redux'
import { sendDataAsync } from '../../../../Redux/Slices/sendData/sendDataSlice'
import { ToastContainer } from 'react-toastify'



function ContentInvoice() {


    const [title, setTitle] = useState("")
    const [payment, setPayment] = useState("")
    const [message, setMessage] = useState("")
    const [subtotal, setSubtotal] = useState("")
    const [discount, setDiscount] = useState("")
    const [type_discount, setType_discount] = useState("")
    const [tax_name, setTax_name] = useState("")
    const [tax_rate, setTax_rate] = useState("")
    const [total, setTotal] = useState("")
    const [client_id, setClient_id] = useState("")

    const [load, setLoad] = useState(false)

    const dispatch = useDispatch()

    const data = useSelector(state => state.sendData)

    const HandleClick = async () => {

        if (
            client_id &&
            title &&
            payment &&
            message &&
            subtotal &&
            discount &&
            type_discount &&
            tax_name &&
            tax_rate &&
            total
        ) {


            await dispatch(sendDataAsync(["invoice", {
                client_id,
                title,
                payment,
                message,
                subtotal,
                discount,
                type_discount,
                tax_name,
                tax_rate,
                total,
                company_id: Math.floor(Math.random() * 19)
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
                    Notify(data.data.message, "success")


                    setLoad(false)
                } else if (data.status === 400) {
                    Notify("Error Please Try Again Later", "error")
                }
            }
        }
    }, [load, data])


    return (
        <Typography className='invoice' variant='div' component="div" sx={{
            width: "100%",
            background: "#012939",
            marginTop: "25px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 20px",
            color: "white"
        }}>


            <Grid container spacing={{ md: 3 }}>


                <Grid item xs={12} md={6} sx={{ borderRight: { md: "0.5px solid #FFFFFF" }, borderBottom: { xs: "0.5px solid #FFFFFF", md: "none" } }}>
                    <Typography variant='div' component="div" sx={{
                        height: "100%",
                        paddingRight: "20px"
                    }}>
                        <Grid sx={{ marginBottom: "50px" }} container spacing={{ md: 3 }}>

                            <Grid item md={6} lg={5} xs={12}>
                                <InvoiceImgComponent />
                                <InputsLeft
                                    discount={discount}
                                    setDiscount={setDiscount}
                                    setType_discount={setType_discount}
                                    type_discount={type_discount}
                                    payment={payment}
                                    setPayment={setPayment}
                                    client_id={client_id}
                                    setClient_id={setClient_id}
                                />
                            </Grid>


                            <Grid item md={6} lg={5} xs={12}>

                                <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                                    <Typography variant='div' component="div">
                                        title
                                    </Typography>
                                    <Typography className='mt-3' variant='div' component="div">
                                        <textarea value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add title" style={{
                                            background: "transparent",
                                            minHeight: "135px",
                                            maxHeight: "135px",
                                            borderRadius: "7px",
                                            width: "80%",
                                            padding: "15px",
                                            color: "white"
                                        }}>
                                        </textarea>
                                    </Typography>
                                </Typography>

                                <InputsRight
                                    tax_rate={tax_rate}
                                    total={total}
                                    subtotal={subtotal}
                                    setTotal={setTotal}
                                    setTax_rate={setTax_rate}
                                    setSubtotal={setSubtotal}
                                    tax_name={tax_name}
                                    setTax_name={setTax_name}
                                />

                            </Grid>


                        </Grid>

                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "30px" }} variant='h4' className='textColor'>
                        Message
                    </Typography>

                    <Typography variant='div' component="div" sx={{ marginTop: "26px" }}>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                            className='textColor'
                            style={{
                                width: "100%",
                                minHeight: "240px",
                                maxHeight: "240px",
                                background: "transparent",
                                borderRadius: "8px",
                                border: "1px solid #ffffff4a",
                                padding: "10px"

                            }}></textarea>

                        <Typography sx={{ color: "#ffffffb0" }}>
                            Do not exceed 100 characters when entering the item name
                        </Typography>

                    </Typography>

                </Grid>
            </Grid>

            <Footer HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />

        </Typography>
    )
}

export default ContentInvoice
